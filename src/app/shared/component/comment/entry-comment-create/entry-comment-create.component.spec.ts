import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommentCreateComponent } from './entry-comment-create.component';

describe('EntryCommentCreateComponent', () => {
  let component: EntryCommentCreateComponent;
  let fixture: ComponentFixture<EntryCommentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryCommentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
