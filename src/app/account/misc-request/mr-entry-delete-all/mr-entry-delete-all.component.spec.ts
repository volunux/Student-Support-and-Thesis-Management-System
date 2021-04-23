import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryDeleteAllComponent } from './mr-entry-delete-all.component';

describe('MiscRequestEntryDeleteAllComponent', () => {
  let component: MiscRequestEntryDeleteAllComponent;
  let fixture: ComponentFixture<MiscRequestEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
