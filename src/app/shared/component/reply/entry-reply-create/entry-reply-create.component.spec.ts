import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryReplyCreateComponent } from './entry-reply-create.component';

describe('EntryReplyCreateComponent', () => {
  let component: EntryReplyCreateComponent;
  let fixture: ComponentFixture<EntryReplyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryReplyCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryReplyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
