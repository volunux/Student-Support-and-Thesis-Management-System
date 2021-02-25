import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEntryStatusComponent } from './comment-entry-status.component';

describe('CommentEntryStatusComponent', () => {
  let component: CommentEntryStatusComponent;
  let fixture: ComponentFixture<CommentEntryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentEntryStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentEntryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
