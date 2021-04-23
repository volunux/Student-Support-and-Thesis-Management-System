import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtEntryDeleteComponent } from './gmt-entry-delete.component';

describe('GmtEntryDeleteComponent', () => {
  let component: GmtEntryDeleteComponent;
  let fixture: ComponentFixture<GmtEntryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmtEntryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtEntryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
