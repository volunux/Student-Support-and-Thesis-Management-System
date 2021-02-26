import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryDeleteAllComponent } from './gr-entry-delete-all.component';

describe('GeneralRequestEntryDeleteAllComponent', () => {
  let component: GeneralRequestEntryDeleteAllComponent;
  let fixture: ComponentFixture<GeneralRequestEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
