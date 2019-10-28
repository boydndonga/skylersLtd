import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsGalleryComponent } from './lands-gallery.component';

describe('LandsGalleryComponent', () => {
  let component: LandsGalleryComponent;
  let fixture: ComponentFixture<LandsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
