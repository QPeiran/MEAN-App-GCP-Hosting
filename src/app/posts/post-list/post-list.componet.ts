import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  @Input() posts : Post[] = [
    // {title: "No.1", content: "Somecontent1" },
    // {title: "No.2", content: "Somecontent2" },
    // {title: "No.3", content: "Somecontent3" },
  ]
}
