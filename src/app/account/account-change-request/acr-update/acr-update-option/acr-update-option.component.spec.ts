import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrUpdateOptionComponent } from './acr-update-option.component';

describe('AcrUpdateOptionComponent', () => {
  let component: AcrUpdateOptionComponent;
  let fixture: ComponentFixture<AcrUpdateOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrUpdateOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrUpdateOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
