import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestEntryCreateHomepageComponent } from './mr-entry-create-homepage.component';

describe('MiscRequestEntryCreateHomepageComponent', () => {
  let component: MiscRequestEntryCreateHomepageComponent;
  let fixture: ComponentFixture<MiscRequestEntryCreateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestEntryCreateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestEntryCreateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
