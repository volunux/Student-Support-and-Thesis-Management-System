import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryStatusComponent } from './request-entry-status.component';

describe('RequestEntryStatusComponent', () => {
  let component: RequestEntryStatusComponent;
  let fixture: ComponentFixture<RequestEntryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
