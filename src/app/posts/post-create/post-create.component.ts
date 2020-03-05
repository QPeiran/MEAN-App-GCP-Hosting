import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/posts.service';
import {of, Observable} from 'rxjs'; // Testing "Observale" here -- safe to delete//

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  yigePost = "Dummy";
  lianggePost = "oldPost";
  @Output() ceatingPostEvent1 = new EventEmitter<Post>();
  //@Output() ceatingPostEvent2 = new EventEmitter<Post>();

  constructor(public aPostServiceInstance: PostService) {}

  enterTitle = "errorT";
  enterContent = "errorC";
  onAddPost(input: HTMLTextAreaElement){
    console.dir(input);
    alert("Data Saved! (form post-create.component)");
    this.yigePost = input.value;
//////////////////////////////// Testing "Observale" here -- safe to delete/////////////
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    myObservable.subscribe(myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
    function multicastSequenceSubscriber() {
      const seq = [1, 2, 3];
      // Keep track of each observer (one for every active subscription)
      const observers = [];
      // Still a single timeoutId because there will only ever be one
      // set of values being generated, multicasted to each subscriber
      let timeoutId;

      // Return the subscriber function (runs when subscribe()
      // function is invoked)
      return (observer) => {
        observers.push(observer);
        // When this is the first subscription, start the sequence
        if (observers.length === 1) {
          timeoutId = doSequence({
            next(val) {
              // Iterate through observers and notify all subscriptions
              observers.forEach(obs => obs.next(val));
            },
            complete() {
              // Notify all complete callbacks
              observers.slice(0).forEach(obs => obs.complete());
            }
          }, seq, 0);
        }

        return {
          unsubscribe() {
            // Remove from the observers array so it's no longer notified
            observers.splice(observers.indexOf(observer), 1);
            // If there's no more listeners, do cleanup
            if (observers.length === 0) {
              clearTimeout(timeoutId);
            }
          }
        };
      };
    }

    // Run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(observer, arr, idx) {
      return setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
        } else {
          doSequence(observer, arr, ++idx);
        }
      }, 1000);
    }

    // Create a new Observable that will deliver the above sequence
    const multicastSequence = new Observable(multicastSequenceSubscriber());

    // Subscribe starts the clock, and begins to emit after 1 second
    multicastSequence.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });

    // After 1 1/2 seconds, subscribe again (should "miss" the first value).
    setTimeout(() => {
      multicastSequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 1500);

    // Logs:
    // (at 1 second): 1st subscribe: 1
    // (at 2 seconds): 1st subscribe: 2
    // (at 2 seconds): 2nd subscribe: 2
    // (at 3 seconds): 1st subscribe: 3
    // (at 3 seconds): 1st sequence finished
    // (at 3 seconds): 2nd subscribe: 3
    // (at 3 seconds): 2nd sequence finished
/////////////////////////////////////////////////////////////////////////////////////
  }
  onAddNewPost(){
    const posting: Post = {
      title : this.enterTitle,
      content : this.enterContent
    }
    //console.log(posting);
    // var title = this.enterTitle;
    // var content = this.enterContent;
     console.log(posting.title);
     console.log(posting.content);
    this.ceatingPostEvent1.emit(posting); //emiting event that contains 'posting'
  }
  onSubmit(f:NgForm){
    if (f.invalid) {return;}
    //const posting: Post = f.value;
    //or
    const posting :Post = {
      title : f.value.title,
      content : f.value.content
    }
    console.log(" post-create ");
    console.log(posting);

    this.aPostServiceInstance.PostsSetter(posting);
    //this.ceatingPostEvent2.emit(posting); //emiting event that contains 'posting'
  }
}
