import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestCreateCommentComponent } from './mr-create-comment.component';

describe('MiscRequestCreateCommentComponent', () => {
  let component: MiscRequestCreateCommentComponent;
  let fixture: ComponentFixture<MiscRequestCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestCreateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
