import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrUpdateHomepageComponent } from './acr-update-homepage.component';

describe('AcrUpdateHomepageComponent', () => {
  let component: AcrUpdateHomepageComponent;
  let fixture: ComponentFixture<AcrUpdateHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrUpdateHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrUpdateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
