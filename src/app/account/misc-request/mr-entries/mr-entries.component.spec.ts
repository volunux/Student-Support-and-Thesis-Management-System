import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntriesComponent } from './mr-entries.component';

describe('MiscRequestEntriesComponent', () => {
  let component: MiscRequestEntriesComponent;
  let fixture: ComponentFixture<MiscRequestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
