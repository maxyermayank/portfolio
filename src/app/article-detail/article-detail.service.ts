import { Injectable, Input } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArticleDetailService {

  constructor(private http: Http) { }
  getArticleById(id) {
    return this.http.get(`//jsonplaceholder.typicode.com/posts/${id}`)
      .map(res => res.json());
  }
}

// export interface IArticle {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

export class Article { // implements IArticle {
  // constructor();
  constructor(userId: number, id: number, title: string, body: string) { }
  // constructor(public userId?: any, public id?: any, public title?: any, public body?: any) {
  //   this.userId = userId ? id : 0;
  //   this.id = id ? id : 0;
  //   this.title = title ? title : '';
  //   this.body = body ? body : '';
  // }
}