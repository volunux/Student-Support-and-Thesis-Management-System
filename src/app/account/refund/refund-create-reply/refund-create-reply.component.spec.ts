import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundCreateReplyComponent } from './refund-create-reply.component';

describe('RefundCreateReplyComponent', () => {
  let component: RefundCreateReplyComponent;
  let fixture: ComponentFixture<RefundCreateReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundCreateReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundCreateReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
