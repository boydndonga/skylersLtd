import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDeleteComponent } from './business-delete.component';

describe('BusinessDeleteComponent', () => {
  let component: BusinessDeleteComponent;
  let fixture: ComponentFixture<BusinessDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
