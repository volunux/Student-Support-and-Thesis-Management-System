import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundCreateCommentComponent } from './refund-create-comment.component';

describe('RefundCreateCommentComponent', () => {
  let component: RefundCreateCommentComponent;
  let fixture: ComponentFixture<RefundCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundCreateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
