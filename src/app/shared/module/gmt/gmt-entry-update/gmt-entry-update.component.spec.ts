import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtEntryUpdateComponent } from './gmt-entry-update.component';

describe('GmtEntryUpdateComponent', () => {
  let component: GmtEntryUpdateComponent;
  let fixture: ComponentFixture<GmtEntryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmtEntryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtEntryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
