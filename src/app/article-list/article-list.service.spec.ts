/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ArticleListService } from './article-list.service';

describe('ArticleList Service', () => {
  beforeEachProviders(() => [ArticleListService]);

  it('should ...',
      inject([ArticleListService], (service: ArticleListService) => {
    expect(service).toBeTruthy();
  }));
});
