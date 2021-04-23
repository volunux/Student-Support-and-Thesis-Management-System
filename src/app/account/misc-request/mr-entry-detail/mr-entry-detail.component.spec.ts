import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryDetailComponent } from './mr-entry-detail.component';

describe('MiscRequestEntryDetailComponent', () => {
  let component: MiscRequestEntryDetailComponent;
  let fixture: ComponentFixture<MiscRequestEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
