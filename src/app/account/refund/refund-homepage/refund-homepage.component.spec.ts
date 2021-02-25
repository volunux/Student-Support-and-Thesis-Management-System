import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundHomepageComponent } from './refund-homepage.component';

describe('RefundHomepageComponent', () => {
  let component: RefundHomepageComponent;
  let fixture: ComponentFixture<RefundHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
