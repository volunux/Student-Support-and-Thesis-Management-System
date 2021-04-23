import { TestBed , ComponentFixture } from '@angular/core/testing';
import { By , } from '@angular/platform-browser';
import { AcronymPipe } from './acronym.pipe';
import { Component , DebugElement } from '@angular/core';

@Component({

	'selector' : 'rsis-acronym-pipe' ,

	'template' : `

	<p> {{text | acronym}} </p>

	<button (click) ='changeText'> Change Text </button>

								`
})
class AcronymComponentTestDrive {

	constructor() {

	}

	public text : string = 'Information and Media Technology';

	public changeText() : void {

		this.text = 'Cyber Security Science';

	}

}

describe('AcronymPipe', () => {

	let pipe : AcronymPipe = null;

	let acronymText : string = null;

	let fixture : ComponentFixture<AcronymComponentTestDrive> = null;

	let component : AcronymComponentTestDrive = null;

  let hostElement : DebugElement = null;

  let acronymParagraphElement : HTMLParagraphElement = null;

  let buttonElement : HTMLButtonElement = null;

	beforeEach(() => {

		expect(pipe).toBeNull();

		expect(acronymText).toBeNull();

		expect(fixture).toBeNull();

		expect(component).toBeNull();

		expect(hostElement).toBeNull();

		expect(acronymParagraphElement).toBeNull();

		expect(buttonElement).toBeNull();

		TestBed.configureTestingModule({

			'declarations' : [AcronymComponentTestDrive , AcronymPipe]
		
		}).compileComponents();

  	acronymText = 'Information and Media Technology';

	});

  it('create an instance', () => {

    pipe = TestBed.inject(AcronymPipe);

    expect(pipe).toBeTruthy();

    expect(acronymText).toBeTruthy();

    fixture = TestBed.createComponent(AcronymComponentTestDrive);

    component = fixture.componentInstance;

  });

  it('should confirm component and fixture is set' , () => {

  	expect(fixture).not.toBeNull();

  	expect(component).not.toBeNull();

  });

  it('should confirm and is removed from text' , () => {

  		const transformText = pipe.transform(acronymText);

  		expect(transformText).not.toContain('and');
  });

  it('should confirm that acronymText have been converted to IMT' , () => {

  		const acronymOutput = pipe.transform(acronymText);

  		expect(acronymOutput).toBe('IMT');
  });

  it('should convert text to an acronym' , () => {

  	hostElement = fixture.debugElement.nativeElement;

  	acronymParagraphElement = hostElement.query(By.css('p'));

  	expect(acronymParagraphElement.textContent).toBe('IMT');

  });

  it('should convert text to acronym after click event on button' , () => {

  	hostElement = fixture.debugElement.nativeElement;

  	acronymParagraphElement = hostElement.query(By.css('p'));

  	buttonElement = hostElement.query(By.css('button'));

  	buttonElement.dispatchEvent(new Event('click'));

  	fixture.detectChanges();

  	expect(component.text).toBe('Cyber Security Science');

  	expect(acronymParagraphElement.textContent).toBe('CSS');

  });

  it('should convert text to acronym after change in text and changeText() method call' , () => {

  	component.text = 'Computer Science';

  	fixture.detectChanges();

  	expect(acronymParagraphElement.textContent).toBe('CS');

  	component.changeText();

  	fixture.detectChanges();

  	expect(acronymParagraphElement.textContent).toBe('CSS');

  });

});
