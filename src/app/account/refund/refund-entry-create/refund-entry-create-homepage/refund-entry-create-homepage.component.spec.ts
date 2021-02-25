import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEntryCreateHomepageComponent } from './refund-entry-create-homepage.component';

describe('RefundEntryCreateHomepageComponent', () => {
  let component: RefundEntryCreateHomepageComponent;
  let fixture: ComponentFixture<RefundEntryCreateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundEntryCreateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundEntryCreateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
