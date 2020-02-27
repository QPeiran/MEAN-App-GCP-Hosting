import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storePosts = [];
  title = 'frontend-angular';
  popAlert(){
    alert("hit me from app.component");
  }
  transPosts(aPost : JSON){
    this.storePosts.push(aPost);
    //console.log(this.storePosts);
  }
}
