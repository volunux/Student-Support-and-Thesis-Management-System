import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCommentValidatorComponent } from './entry-comment-validator.component';

describe('EntryCommentValidatorComponent', () => {
  let component: EntryCommentValidatorComponent;
  let fixture: ComponentFixture<EntryCommentValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryCommentValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCommentValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
