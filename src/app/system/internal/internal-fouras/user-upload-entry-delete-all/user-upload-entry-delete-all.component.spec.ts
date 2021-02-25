import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadEntryDeleteAllComponent } from './user-upload-entry-delete-all.component';

describe('UserUploadEntryDeleteAllComponent', () => {
  let component: UserUploadEntryDeleteAllComponent;
  let fixture: ComponentFixture<UserUploadEntryDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUploadEntryDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadEntryDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
