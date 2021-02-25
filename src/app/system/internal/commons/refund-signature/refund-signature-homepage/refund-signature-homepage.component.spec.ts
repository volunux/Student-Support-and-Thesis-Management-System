import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSignatureHomepageComponent } from './refund-signature-homepage.component';

describe('RefundSignatureHomepageComponent', () => {
  let component: RefundSignatureHomepageComponent;
  let fixture: ComponentFixture<RefundSignatureHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundSignatureHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundSignatureHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
