import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadEntriesComponent } from './user-upload-entries.component';

describe('UserUploadEntriesComponent', () => {
  let component: UserUploadEntriesComponent;
  let fixture: ComponentFixture<UserUploadEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUploadEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUploadEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
