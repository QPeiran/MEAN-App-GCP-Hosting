import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  yigePost = "Dummy";
  lianggePost = "oldPost";
  @Output() ceatingPostEvent = new EventEmitter;

  enterTitle = "errorT";
  enterContent = "errorC";
  onAddPost(input: HTMLTextAreaElement){
    console.dir(input);
    alert("Data Saved! (form post-create.component)");
    this.yigePost = input.value;
  }
  onAddNewPost(){
    const posting = {
      title : this.enterTitle,
      content : this.enterContent
    }
    console.log(posting);
    // var title = this.enterTitle;
    // var content = this.enterContent;
    // console.log(title);
    // console.log(content);
    this.ceatingPostEvent.emit(posting); //emiting event that contains 'posting'
  }
}
