/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { GalleryService } from './gallery.service';

describe('Gallery Service', () => {
  beforeEachProviders(() => [GalleryService]);

  it('should ...',
      inject([GalleryService], (service: GalleryService) => {
    expect(service).toBeTruthy();
  }));
});
