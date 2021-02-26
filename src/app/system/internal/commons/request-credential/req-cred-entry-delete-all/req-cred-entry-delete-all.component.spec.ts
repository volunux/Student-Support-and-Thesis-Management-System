import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCredentialEntryDeleteAllComponent } from './req-cred-entry-delete-all.component';

describe('RequestCredentialEntryDeleteAllComponent', () => {
  let component: RequestCredentialEntryDeleteAllComponent;
  let fixture: ComponentFixture<RequestCredentialEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCredentialEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCredentialEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
