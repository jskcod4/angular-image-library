import { TestBed } from '@angular/core/testing';

import { AngularImageLibraryService } from './angular-image-library.service';

describe('AngularImageLibraryService', () => {
  let service: AngularImageLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularImageLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
