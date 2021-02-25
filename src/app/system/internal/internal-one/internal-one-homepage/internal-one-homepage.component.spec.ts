import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneHomepageComponent } from './internal-one-homepage.component';

describe('InternalOneHomepageComponent', () => {
  let component: InternalOneHomepageComponent;
  let fixture: ComponentFixture<InternalOneHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
