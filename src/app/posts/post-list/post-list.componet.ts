import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent1 implements OnInit, OnDestroy{
  @Input() posts1 : Post[] = [];
  posts2 : Post[] = [];
  private postsSub = new Subscription;

  constructor (public postService: PostService){
    //"public" keywork automatically create a new property (postService)
    //in this component and store the incoming value in that property
  }

  ngOnInit() {
    //this.posts2 = this.postService.PostsGetter();
    const myObservable = this.postService.postsObservable();
    const myObserver =  (posts: Post[]) => {
           console.log("Hi from myObserver!");
           this.posts2 = posts;
           console.log(this.posts2);}
    ////////////////////////////////////////// not working
    // const myObserver =  function (posts: Post[]) {
    //   console.log("Hi!");
    //   this.posts2 = posts;
    //   console.log(this.posts2);}
    // OR
    // const myObserver = {
    //   next: function (posts: Post[]) {
    //     console.log("Hi!");
    //     this.posts2 = posts;
    //     console.log(this.posts2);
    //   },
    //   error: function (error){},
    //   complete: function() {}
    // };
    //////////////////////////////////////////////
    console.log(myObserver);//it only execute once when the "PostListComponent1" initialize
     //call subscribe() method from "Observable" class
     this.postsSub = myObservable.subscribe(myObserver);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  EditPost(i: String) {
    console.log(i);
  }

  DeletePost(obj: Object) {
  }
 }
