import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrSendMailHomepageComponent } from './mr-send-mail-homepage.component';

describe('AcrSendMailHomepageComponent', () => {
  let component: AcrSendMailHomepageComponent;
  let fixture: ComponentFixture<AcrSendMailHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrSendMailHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrSendMailHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
