import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/posts.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent1 {
  @Input() posts1 : Post[] = [];
 }

export class PostListComponent2 implements OnInit{
  @Input() posts2 : Post[] = []
  constructor (public aPostServiceInstance: PostService) {}
  // equal to creat a new varibale "postService" then store the incoming "PostService" instance to it (and make it public)

  ngOnInit(){
    this.posts2 = this.aPostServiceInstance.PostsGetter();
  }
}
