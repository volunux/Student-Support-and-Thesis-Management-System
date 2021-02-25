import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOneEntryCreateComponent } from './internal-one-entry-create.component';

describe('InternalOneEntryCreateComponent', () => {
  let component: InternalOneEntryCreateComponent;
  let fixture: ComponentFixture<InternalOneEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalOneEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalOneEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
