import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtEntryCreateComponent } from './gmt-entry-create.component';

describe('GmtEntryCreateComponent', () => {
  let component: GmtEntryCreateComponent;
  let fixture: ComponentFixture<GmtEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmtEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
