import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/posts.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent1 implements OnInit{
  @Input() posts1 : Post[] = [];
  posts2 : Post[] = [];

  constructor (public postService: PostService){
    //"public" keywork automatically create a new property (postService)
    //in this component and store the incoming value in that property
  }

  ngOnInit() {
    //this.posts2 = this.postService.PostsGetter();
    this.postService.postsUpdatedGetter() //call subscribe() method from "Observable" class
      .subscribe((posts: Post[]) => {
        //console.log(this.posts2);
        this.posts2 = posts;
      });
  }
 }
