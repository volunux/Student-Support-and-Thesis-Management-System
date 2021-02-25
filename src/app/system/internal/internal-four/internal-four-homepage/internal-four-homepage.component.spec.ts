import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFourHomepageComponent } from './internal-four-homepage.component';

describe('InternalFourHomepageComponent', () => {
  let component: InternalFourHomepageComponent;
  let fixture: ComponentFixture<InternalFourHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalFourHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalFourHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
