import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPaymentHomepageComponent } from './gp-homepage.component';

describe('GeneralPaymentHomepageComponent', () => {
  let component: GeneralPaymentHomepageComponent;
  let fixture: ComponentFixture<GeneralPaymentHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPaymentHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPaymentHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
