import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryDetailComponent } from './general-request-entry-detail.component';

describe('GeneralRequestEntryDetailComponent', () => {
  let component: GeneralRequestEntryDetailComponent;
  let fixture: ComponentFixture<GeneralRequestEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
