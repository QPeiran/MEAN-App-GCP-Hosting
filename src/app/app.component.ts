import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storePosts: Post[] = [];
  title = 'frontend-angular';
  popAlert(){
    alert("hit me from app.component");
  }
  transPosts(aPost: Post){
    this.storePosts.push(aPost);
    //console.log(this.storePosts);
  }
}
