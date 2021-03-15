import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEntryUpdateStatusComponent } from './request-entry-update-status.component';

describe('RequestEntryUpdateStatusComponent', () => {
  let component: RequestEntryUpdateStatusComponent;
  let fixture: ComponentFixture<RequestEntryUpdateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEntryUpdateStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEntryUpdateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
