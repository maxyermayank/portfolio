import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ArticleListService {

  constructor(private http: Http) { }
  getArticles() {
    return this.http.get('//jsonplaceholder.typicode.com/posts')
      .map(res => res.json())
      // .do(articles => console.log(articles))
  }
}
