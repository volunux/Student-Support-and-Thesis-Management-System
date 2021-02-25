import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeHomepageComponent } from './internal-three-homepage.component';

describe('InternalThreeHomepageComponent', () => {
  let component: InternalThreeHomepageComponent;
  let fixture: ComponentFixture<InternalThreeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
