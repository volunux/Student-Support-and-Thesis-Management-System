import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryGenerateUsernamePasswordComponent } from './gr-entry-generate-u-p.component';

describe('GeneralRequestEntryGenerateUsernamePasswordComponent', () => {
  let component: GeneralRequestEntryGenerateUsernamePasswordComponent;
  let fixture: ComponentFixture<GeneralRequestEntryGenerateUsernamePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryGenerateUsernamePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryGenerateUsernamePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
