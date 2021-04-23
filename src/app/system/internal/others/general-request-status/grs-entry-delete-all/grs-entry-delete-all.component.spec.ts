import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntryDeleteAllComponent } from './grs-entry-delete-all.component';

describe('GeneralRequestStatusEntryDeleteAllComponent', () => {
  let component: GeneralRequestStatusEntryDeleteAllComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
