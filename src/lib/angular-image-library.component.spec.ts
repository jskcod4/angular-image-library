import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularImageLibraryComponent } from './angular-image-library.component';

describe('AngularImageLibraryComponent', () => {
  let component: AngularImageLibraryComponent;
  let fixture: ComponentFixture<AngularImageLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularImageLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularImageLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
