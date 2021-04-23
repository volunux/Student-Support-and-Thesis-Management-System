import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrUpdateRoleComponent } from './acr-update-role.component';

describe('AcrUpdateRoleComponent', () => {
  let component: AcrUpdateRoleComponent;
  let fixture: ComponentFixture<AcrUpdateRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrUpdateRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrUpdateRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
