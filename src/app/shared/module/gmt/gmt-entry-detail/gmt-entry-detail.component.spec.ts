import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtEntryDetailComponent } from './gmt-entry-detail.component';

describe('GmtEntryDetailComponent', () => {
  let component: GmtEntryDetailComponent;
  let fixture: ComponentFixture<GmtEntryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmtEntryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtEntryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
