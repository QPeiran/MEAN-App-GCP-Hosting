import { Post } from './posts/post.model';

export class PostService {
  private SomePosts: Post[] = [];
  PostsGetter() {
    //return this.SomePosts;
    //this is a reference type, replace this with a deepcopy
    return [...this.SomePosts];
  }
  PostsSetter(ANewPost: Post) {
    this.SomePosts.push(ANewPost);
  }
}

