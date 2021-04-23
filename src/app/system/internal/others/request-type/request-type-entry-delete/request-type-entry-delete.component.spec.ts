import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryDeleteComponent } from './request-type-entry-delete.component';

describe('RequestTypeEntryDeleteComponent', () => {
  let component: RequestTypeEntryDeleteComponent;
  let fixture: ComponentFixture<RequestTypeEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
