import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from 'src/app/posts.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  @Input() posts : Post[] = [
    // {title: "No.1", content: "Somecontent1" },
    // {title: "No.2", content: "Somecontent2" },
    // {title: "No.3", content: "Somecontent3" },
  ]
  constructor (public aPostServiceInstance: PostService) {}
  // equal to creat a new varibale "postService" then store the incoming "PostService" instance to it (and make it public)

  ngOnInit(){
    this.posts = this.aPostServiceInstance.PostsGetter();
  }
}
