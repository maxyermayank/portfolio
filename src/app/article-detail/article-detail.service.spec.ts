/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ArticleDetailService } from './article-detail.service';

describe('ArticleDetail Service', () => {
  beforeEachProviders(() => [ArticleDetailService]);

  it('should ...',
      inject([ArticleDetailService], (service: ArticleDetailService) => {
    expect(service).toBeTruthy();
  }));
});
