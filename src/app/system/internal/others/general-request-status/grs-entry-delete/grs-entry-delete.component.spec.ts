import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntryDeleteComponent } from './grs-entry-delete.component';

describe('GeneralRequestStatusEntryDeleteComponent', () => {
  let component: GeneralRequestStatusEntryDeleteComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
