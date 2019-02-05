import { TestBed } from '@angular/core/testing';

import { PicturesListService } from './pictures-list.service';

describe('PicturesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicturesListService = TestBed.get(PicturesListService);
    expect(service).toBeTruthy();
  });
});
