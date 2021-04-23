import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtFormInputComponent } from './gmt-form-input.component';

describe('GmtFormInputComponent', () => {
  let component: GmtFormInputComponent;
  let fixture: ComponentFixture<GmtFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmtFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
