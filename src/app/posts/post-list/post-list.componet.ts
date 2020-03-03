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
  @Input() posts2 : Post[] = [];
 }
