import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryUpdateFieldComponent } from './mr-entry-update-field.component';

describe('MiscRequestEntryUpdateFieldComponent', () => {
  let component: MiscRequestEntryUpdateFieldComponent;
  let fixture: ComponentFixture<MiscRequestEntryUpdateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryUpdateFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryUpdateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
