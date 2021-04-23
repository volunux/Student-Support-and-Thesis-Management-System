import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntryDetailComponent } from './grs-entry-detail.component';

describe('GeneralRequestStatusEntryDetailComponent', () => {
  let component: GeneralRequestStatusEntryDetailComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
