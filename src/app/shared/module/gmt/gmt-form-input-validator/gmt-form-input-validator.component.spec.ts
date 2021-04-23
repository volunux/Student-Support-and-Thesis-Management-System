import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtFormInputValidatorComponent } from './gmt-form-input-validator.component';

describe('GmtFormInputValidatorComponent', () => {
  let component: GmtFormInputValidatorComponent;
  let fixture: ComponentFixture<GmtFormInputValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmtFormInputValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtFormInputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
