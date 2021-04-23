import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntryUpdateComponent } from './grs-entry-update.component';

describe('GeneralRequestStatusEntryUpdateComponent', () => {
  let component: GeneralRequestStatusEntryUpdateComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
