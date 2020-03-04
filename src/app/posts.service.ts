import { Post } from './posts/post.model';
import {Subject} from 'rxjs';

export class PostService {
  private SomePosts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  // PostsGetter() {
  //   //return this.SomePosts; //it works but a bad practice tho
  //   //this is a reference type, replace this with a deepcopy
  //   return [...this.SomePosts];
  // }

  postsUpdatedGetter(){
    return this.postsUpdated.asObservable();
  }

  PostsSetter(ANewPost: Post) {
    this.SomePosts.push(ANewPost);
    console.log("post.service ");
    console.log(this.SomePosts);
    this.postsUpdated.next([...this.SomePosts]);
  }
}

