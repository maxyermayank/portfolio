import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from '@angular/router'
import { Album, AlbumService } from './album.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit, OnDestroy {

  album: Observable<any>;
  private sub: any;

  constructor(
    private service: AlbumService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      // this.service.getAlbumById(id).then(album => this.album = album);

      this.album = this.route.params
      .switchMap(params => this.service.getAlbumById(id));
      console.log(" Album ::" +  this.album);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoGallery() {
    this.router.navigate(['/gallery']);
  }

}