import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrSendMailComponent } from './acr-send-mail.component';

describe('AcrSendMailComponent', () => {
  let component: AcrSendMailComponent;
  let fixture: ComponentFixture<AcrSendMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrSendMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrSendMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
