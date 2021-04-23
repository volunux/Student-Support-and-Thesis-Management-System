import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestCreateReplyComponent } from './mr-create-reply.component';

describe('MiscRequestCreateReplyComponent', () => {
  let component: MiscRequestCreateReplyComponent;
  let fixture: ComponentFixture<MiscRequestCreateReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestCreateReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestCreateReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
