import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTypeEntriesComponent } from './request-type-entries.component';

describe('RequestTypeEntriesComponent', () => {
  let component: RequestTypeEntriesComponent;
  let fixture: ComponentFixture<RequestTypeEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTypeEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTypeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
