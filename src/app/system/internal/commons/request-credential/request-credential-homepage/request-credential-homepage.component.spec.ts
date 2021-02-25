import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredentialHomepageComponent } from './request-credential-homepage.component';

describe('RequestCredentialHomepageComponent', () => {
  let component: RequestCredentialHomepageComponent;
  let fixture: ComponentFixture<RequestCredentialHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCredentialHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredentialHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
