import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryCreateComponent } from './refund-entry-create.component';

describe('RefundEntryCreateComponent', () => {
  let component: RefundEntryCreateComponent;
  let fixture: ComponentFixture<RefundEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
