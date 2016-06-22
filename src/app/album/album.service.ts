import { Injectable, Input } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AlbumService {

  constructor(private http: Http) { }
  getAlbumById(id) {
    return this.http.get(`//jsonplaceholder.typicode.com/albums/${id}`)
      .map(res => res.json());
  }
}

// export interface IAlbum {
//   userId: number;
//   id: number;
//   title: string;
// };

export class Album { // implements IAlbum {
  // constructor();
  constructor(userId: number, id: number, title: string) { }
  // constructor(public userId?: any, public id?: any, public title?: anyy) {
  //   this.userId = userId ? id : 0;
  //   this.id = id ? id : 0;
  //   this.title = title ? title : '';
  // }

}
