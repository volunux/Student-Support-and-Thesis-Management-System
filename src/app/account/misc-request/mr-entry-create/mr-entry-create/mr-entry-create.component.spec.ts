import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryCreateComponent } from './mr-entry-create.component';

describe('MiscRequestEntryCreateComponent', () => {
  let component: MiscRequestEntryCreateComponent;
  let fixture: ComponentFixture<MiscRequestEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
