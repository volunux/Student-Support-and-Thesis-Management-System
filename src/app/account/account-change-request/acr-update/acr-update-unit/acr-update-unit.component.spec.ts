import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrUpdateUnitComponent } from './acr-update-unit.component';

describe('AcrUpdateUnitComponent', () => {
  let component: AcrUpdateUnitComponent;
  let fixture: ComponentFixture<AcrUpdateUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrUpdateUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrUpdateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
