import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryCreateComponent } from './general-request-entry-create.component';

describe('GeneralRequestEntryCreateComponent', () => {
  let component: GeneralRequestEntryCreateComponent;
  let fixture: ComponentFixture<GeneralRequestEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
