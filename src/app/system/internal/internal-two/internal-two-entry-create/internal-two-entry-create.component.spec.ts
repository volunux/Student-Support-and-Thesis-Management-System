import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTwoEntryCreateComponent } from './internal-two-entry-create.component';

describe('InternalTwoEntryCreateComponent', () => {
  let component: InternalTwoEntryCreateComponent;
  let fixture: ComponentFixture<InternalTwoEntryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTwoEntryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTwoEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
