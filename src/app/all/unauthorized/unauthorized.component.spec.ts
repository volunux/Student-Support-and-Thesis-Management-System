import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnauthorizedComponent } from './unauthorized.component';

describe('UnauthorizedComponent' , () => {

  let component : UnauthorizedComponent;

  let fixture : ComponentFixture<UnauthorizedComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ UnauthorizedComponent ]

    }).compileComponents();

  });

  beforeEach(() => {

    fixture = TestBed.createComponent(UnauthorizedComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should confirm variables' , () => {

    let paragraphElements : HTMLParagraphElement[] = fixture.nativeElement.querySelector('p');

    expect(paragraphElements.length).toBe(2);

  });

});
