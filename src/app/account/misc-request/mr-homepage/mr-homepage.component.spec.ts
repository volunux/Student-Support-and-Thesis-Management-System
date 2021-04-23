import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscRequestHomepageComponent } from './mr-homepage.component';

describe('MiscRequestHomepageComponent', () => {
  let component: MiscRequestHomepageComponent;
  let fixture: ComponentFixture<MiscRequestHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscRequestHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscRequestHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
