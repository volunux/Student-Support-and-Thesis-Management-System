import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryOptionComponent } from './mr-entry-option.component';

describe('MiscRequestEntryOptionComponent', () => {
  let component: MiscRequestEntryOptionComponent;
  let fixture: ComponentFixture<MiscRequestEntryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
