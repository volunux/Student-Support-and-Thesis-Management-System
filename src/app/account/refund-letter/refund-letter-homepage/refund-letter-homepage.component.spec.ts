import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundLetterHomepageComponent } from './refund-letter-homepage.component';

describe('RefundLetterHomepageComponent', () => {
  let component: RefundLetterHomepageComponent;
  let fixture: ComponentFixture<RefundLetterHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundLetterHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundLetterHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
