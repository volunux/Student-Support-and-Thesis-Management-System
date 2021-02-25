import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestCreateCommentComponent } from './general-request-create-comment.component';

describe('GeneralRequestCreateCommentComponent', () => {
  let component: GeneralRequestCreateCommentComponent;
  let fixture: ComponentFixture<GeneralRequestCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestCreateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
