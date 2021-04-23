import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChangeRequestCreateReplyComponent } from './acr-create-reply.component';

describe('AccountChangeRequestCreateReplyComponent', () => {
  let component: AccountChangeRequestCreateReplyComponent;
  let fixture: ComponentFixture<AccountChangeRequestCreateReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChangeRequestCreateReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChangeRequestCreateReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
