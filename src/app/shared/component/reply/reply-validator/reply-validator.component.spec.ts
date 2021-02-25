import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyValidatorComponent } from './reply-validator.component';

describe('ReplyValidatorComponent', () => {
  let component: ReplyValidatorComponent;
  let fixture: ComponentFixture<ReplyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
