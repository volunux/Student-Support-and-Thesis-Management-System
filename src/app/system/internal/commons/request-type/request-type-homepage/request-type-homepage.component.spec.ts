import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeHomepageComponent } from './request-type-homepage.component';

describe('RequestTypeHomepageComponent', () => {
  let component: RequestTypeHomepageComponent;
  let fixture: ComponentFixture<RequestTypeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
