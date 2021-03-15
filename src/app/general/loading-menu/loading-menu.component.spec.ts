import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingMenuComponent } from './loading-menu.component';

describe('LoadingMenuComponent', () => {
  let component: LoadingMenuComponent;
  let fixture: ComponentFixture<LoadingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
