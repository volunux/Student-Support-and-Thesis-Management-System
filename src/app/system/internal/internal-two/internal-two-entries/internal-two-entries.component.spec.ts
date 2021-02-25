import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntriesComponent } from './internal-two-entries.component';

describe('InternalTwoEntriesComponent', () => {
  let component: InternalTwoEntriesComponent;
  let fixture: ComponentFixture<InternalTwoEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
