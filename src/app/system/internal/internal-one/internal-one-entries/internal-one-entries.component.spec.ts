import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntriesComponent } from './internal-one-entries.component';

describe('InternalOneEntriesComponent', () => {
  let component: InternalOneEntriesComponent;
  let fixture: ComponentFixture<InternalOneEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
