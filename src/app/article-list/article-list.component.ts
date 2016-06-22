import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArticleListService } from './article-list.service';
import {ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_RADIO_DIRECTIVES, MdRadioDispatcher} from '@angular2-material/radio';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-article-list',
  templateUrl: 'article-list.component.html',
  styleUrls: ['article-list.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES, MD_CHECKBOX_DIRECTIVES, MD_RADIO_DIRECTIVES, MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES],
  providers: [MdRadioDispatcher, MdIconRegistry]
})
export class ArticleListComponent implements OnInit, OnDestroy {
  articles: Observable<any[]>;
  private sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ArticleListService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // this.service.getArticles().then(articles => this.articles = articles);
      this.articles = this.service.getArticles();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(id: String) {
    this.router.navigate(['/article', id]);
  }
}
