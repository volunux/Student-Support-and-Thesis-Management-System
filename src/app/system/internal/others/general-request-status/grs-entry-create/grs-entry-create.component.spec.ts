import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntryCreateComponent } from './grs-entry-create.component';

describe('GeneralRequestStatusEntryCreateComponent', () => {
  let component: GeneralRequestStatusEntryCreateComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
