import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestHomepageComponent } from './general-request-homepage.component';

describe('GeneralRequestHomepageComponent', () => {
  let component: GeneralRequestHomepageComponent;
  let fixture: ComponentFixture<GeneralRequestHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
