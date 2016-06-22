import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, ROUTER_DIRECTIVES} from '@angular/router'
import { Article, ArticleDetailService } from './article-detail.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

  article: Observable<any>;
  private sub: any;

  constructor(
    private service: ArticleDetailService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      // this.service.getArticleById(id).then(article => this.article = article);

      this.article = this.route.params
      .switchMap(params => this.service.getArticleById(id));
      console.log(" Article ::" +  this.article);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoArticles() {
    this.router.navigate(['/heroes']);
  }

}
