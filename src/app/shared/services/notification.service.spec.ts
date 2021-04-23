import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService' , () => {

  let service : NotificationService;

  beforeEach(() => {

    TestBed.configureTestingModule({});

    service = TestBed.inject(NotificationService);

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

    expect(service.notificationAvailable).toBeFalse();

    expect(service.notificationMessage).toEqual('');

  });

  it('should set instance variable' , () => {

  	let expectedMessage = 'Success';

  	service.addNotification(expectedMessage);

  	expect(service.notificationMessage).toBe(expectedMessage);

  	service.setNotificationStatus(true);

  	expect(service.notificationAvailable).toBe(true);

  	service.removeNotification();

  	expect(service.notificationAvailable).toBe(false);

  	expect(service.notificationMessage).toBeNull();


  });

});
