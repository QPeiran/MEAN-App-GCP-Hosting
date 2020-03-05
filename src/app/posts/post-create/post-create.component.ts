import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/posts.service';
import {of} from 'rxjs';

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
