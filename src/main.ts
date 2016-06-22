import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@angular/router';
import {GalleryComponent} from './app/gallery/';
import {GalleryService } from './app/gallery/gallery.service';
import {AlbumComponent} from './app/album/';
import {AlbumService } from './app/album/album.service';
import {ArticleListComponent } from './app/article-list/';
import {ArticleListService } from './app/article-list/article-list.service';
import {ArticleDetailComponent } from './app/article-detail/';
import {ArticleDetailService } from './app/article-detail/article-detail.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ArticleListService,
  ArticleDetailService,
  GalleryService,
  AlbumService,
  provideRouter([
    { path: '/', redirectTo: '/articles' },
    { path: '/gallery', component: GalleryComponent },
    { path: '/album/:id', component: AlbumComponent },
    { path: '/articles', component: ArticleListComponent },
    { path: '/article/:id', component: ArticleDetailComponent }
  ])
])
  .catch(err => console.error(err));

