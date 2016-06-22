import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }
  getAbums() {
    return this.http.get('http://jsonplaceholder.typicode.com/albums')
      .map(res => res.json())
  }
}
