import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntryCreateComponent } from './request-type-entry-create.component';

describe('RequestTypeEntryCreateComponent', () => {
  let component: RequestTypeEntryCreateComponent;
  let fixture: ComponentFixture<RequestTypeEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
