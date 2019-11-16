import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDevComponent } from './b-dev.component';

describe('BDevComponent', () => {
  let component: BDevComponent;
  let fixture: ComponentFixture<BDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
