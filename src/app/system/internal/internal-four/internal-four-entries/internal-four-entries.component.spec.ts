import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFourEntriesComponent } from './internal-four-entries.component';

describe('InternalFourEntriesComponent', () => {
  let component: InternalFourEntriesComponent;
  let fixture: ComponentFixture<InternalFourEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalFourEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalFourEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
