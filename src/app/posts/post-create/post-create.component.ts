import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  yigePost = "Dummy";
  lianggePost = "oldPost";
  @Output() ceatingPostEvent = new EventEmitter<Post>();

  enterTitle = "errorT";
  enterContent = "errorC";
  onAddPost(input: HTMLTextAreaElement){
    console.dir(input);
    alert("Data Saved! (form post-create.component)");
    this.yigePost = input.value;
  }
  onAddNewPost(){
    const posting: Post = {
      title : this.enterTitle,
      content : this.enterContent
    }
    //console.log(posting);
    // var title = this.enterTitle;
    // var content = this.enterContent;
    // console.log(title);
    // console.log(content);
    this.ceatingPostEvent.emit(posting); //emiting event that contains 'posting'
  }
}
