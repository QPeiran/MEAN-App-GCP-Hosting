import { Post, Todo } from './posts/post.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private SomePosts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  // PostsGetter() {
  //   //return this.SomePosts; //it works but a bad practice tho
  //   //this is a reference type, replace this with a deepcopy
  //   return [...this.SomePosts];
  // }

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  PostsSetter(ANewPost: Post) {
    this.SomePosts.push(ANewPost);
    console.log("post.service ");
    console.log(this.SomePosts);
    this.postsUpdated.next([...this.SomePosts]); //now this.subject performing as "Observer"
  }

  postsObservable() {
    console.log("getting Posts: ");
    console.log(this.SomePosts);
    return this.postsUpdated.asObservable(); ///return this.subject as "Observable"
    //Subjects are observables themselves but what sets them apart is that they are also observers.
    //".asObservable()" return a good old Observable version, will make your code much safer and will prevent poor coding practices
  }
}
