import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestCreateCommentComponent } from './acr-create-comment.component';

describe('AccountChangeRequestCreateCommentComponent', () => {
  let component: AccountChangeRequestCreateCommentComponent;
  let fixture: ComponentFixture<AccountChangeRequestCreateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestCreateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestCreateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
