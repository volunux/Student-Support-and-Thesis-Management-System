import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusHomepageComponent } from './grs-homepage.component';

describe('GeneralRequestStatusHomepageComponent', () => {
  let component: GeneralRequestStatusHomepageComponent;
  let fixture: ComponentFixture<GeneralRequestStatusHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
