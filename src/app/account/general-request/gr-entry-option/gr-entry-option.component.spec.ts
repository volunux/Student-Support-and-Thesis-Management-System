import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryOptionComponent } from './gr-entry-option.component';

describe('GeneralRequestEntryOptionComponent', () => {
  let component: GeneralRequestEntryOptionComponent;
  let fixture: ComponentFixture<GeneralRequestEntryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
