import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredentialEntriesComponent } from './request-credential-entries.component';

describe('RequestCredentialEntriesComponent', () => {
  let component: RequestCredentialEntriesComponent;
  let fixture: ComponentFixture<RequestCredentialEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCredentialEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredentialEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
