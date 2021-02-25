import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyCommentDetailComponent } from './reply-comment-detail.component';

describe('ReplyCommentDetailComponent', () => {
  let component: ReplyCommentDetailComponent;
  let fixture: ComponentFixture<ReplyCommentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyCommentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyCommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
