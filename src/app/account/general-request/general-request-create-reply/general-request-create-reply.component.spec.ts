import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestCreateReplyComponent } from './general-request-create-reply.component';

describe('GeneralRequestCreateReplyComponent', () => {
  let component: GeneralRequestCreateReplyComponent;
  let fixture: ComponentFixture<GeneralRequestCreateReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestCreateReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestCreateReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
