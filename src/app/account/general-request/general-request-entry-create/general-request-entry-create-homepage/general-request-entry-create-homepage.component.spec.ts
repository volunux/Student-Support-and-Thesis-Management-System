import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRequestEntryCreateHomepageComponent } from './general-request-entry-create-homepage.component';

describe('GeneralRequestEntryCreateHomepageComponent', () => {
  let component: GeneralRequestEntryCreateHomepageComponent;
  let fixture: ComponentFixture<GeneralRequestEntryCreateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRequestEntryCreateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRequestEntryCreateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
