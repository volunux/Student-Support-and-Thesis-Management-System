import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoHomepageComponent } from './internal-two-homepage.component';

describe('InternalTwoHomepageComponent', () => {
  let component: InternalTwoHomepageComponent;
  let fixture: ComponentFixture<InternalTwoHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
