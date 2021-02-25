import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThreeEntriesComponent } from './internal-three-entries.component';

describe('InternalThreeEntriesComponent', () => {
  let component: InternalThreeEntriesComponent;
  let fixture: ComponentFixture<InternalThreeEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalThreeEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThreeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
