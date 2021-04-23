import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestStatusEntriesComponent } from './grs-entries.component';

describe('GeneralRequestStatusEntriesComponent', () => {
  let component: GeneralRequestStatusEntriesComponent;
  let fixture: ComponentFixture<GeneralRequestStatusEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestStatusEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestStatusEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
