import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntriesComponent } from './gr-entries.component';

describe('GeneralRequestEntriesComponent', () => {
  let component: GeneralRequestEntriesComponent;
  let fixture: ComponentFixture<GeneralRequestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
