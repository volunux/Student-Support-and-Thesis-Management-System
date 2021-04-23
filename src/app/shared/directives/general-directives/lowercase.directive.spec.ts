import { LowercaseDirective } from './lowercase.directive';
import { Component , DebugElement } from '@angular/core';
import { ReactiveFormsModule , FormGroup , FormControl } from '@angular/forms';
import { ComponentFixture , TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({

	'selector' : 'rsis-lowercase-directive-component' ,

	'template' : `

	<div *ngIf ='entryForm' class ='' [formGroup] ='entryForm'>

			<div *ngIf ='first_name' class ='form-group'>

				<label for ='first_name'> First Name * : </label>

				<input type ='text' name ='first_name' formControlName ='first_name' appLowercase ='appLowercase'>

			</div>

		</div>

		<button (click) ='changeInputElementValueToLowerCase()'> Change Input Element Value </button> 

	`

})

class LowerCaseDirectiveComponentTestDrive {

	constructor() {


	}

	public entryForm : FormGroup = null;

	get first_name() : FormControl {

		return this.entryForm.get('first_name') as FormControl;
	}

	public changeInputElementValueToLowerCase() : void {

		this.first_name.setValue('Yusuf');
	}

}

describe('LowercaseDirective' , () => {

	let directive : LowercaseDirective = null;

	let fixture : ComponentFixture<LowerCaseDirectiveComponentTestDrive> = null;

	let component : LowerCaseDirectiveComponentTestDrive = null;

	let hostElement : DebugElement = null;

	let lowerCaseDirectiveInputElement : HTMLInputElement = null;

	beforeEach(() => {

		TestBed.configureTestingModule({

			declarations : [LowerCaseDirectiveComponentTestDrive , LowercaseDirective ] ,

			imports : [ReactiveFormsModule ]
		
		}).compileComponents();

	});

	it('should confirm properties are set to null' , () => {

		expect(directive).toBeNull();

		expect(fixture).toBeNull();

		expect(component).toBeNull();

		expect(hostElement).toBeNull();

		expect(lowerCaseDirectiveInputElement).toBeNull();

	});

  it('should create an instance of properties' , () => {

    directive = TestBed.inject(LowercaseDirective);

    fixture = TestBed.createComponent(LowerCaseDirectiveComponentTestDrive);

    component = fixture.componentInstance;

    hostElement = fixture.debugElement;

    expect(directive).toBeTruthy();

    expect(fixture).toBeTruthy();

    expect(component).toBeTruthy();

    expect(hostElement).toBeTruthy();

    expect(lowerCaseDirectiveInputElement).toBeTruthy();

    expect(component.entryForm).toBeNull();

  	component.entryForm = new FormGroup({'first_name' : new FormControl('')});

  	expect(component.entryForm).toBeTruthy();

  	expect(component.first_name).toBeTruthy();

  	fixture.detectChanges();

  });

  it('should create an instance of input element' , () => {

    lowerCaseDirectiveInputElement = hostElement.nativeElement.query(By.css('input')) as HTMLInputElement;

    expect(lowerCaseDirectiveInputElement).toBeTruthy();

  });

  it('should change form control value' , () => {

  	component.changeInputElementValueToLowerCase();

  	fixture.detectChanges();

  	expect(lowerCaseDirectiveInputElement.value).toBe('yusuf');

  });

  it('should confirm element value have been lowercase' , () => {

  	lowerCaseDirectiveInputElement.value = 'YUSUF';

  	lowerCaseDirectiveInputElement.dispatchEvent(new Event('blur'));

  	fixture.detectChanges();

  	expect(lowerCaseDirectiveInputElement.value).toBe('yusuf');

  });

  it('should confirm element value have been lowercase if one or more words' , () => {

  	lowerCaseDirectiveInputElement.value = 'YUSUF MUSA YUSUF';

  	lowerCaseDirectiveInputElement.dispatchEvent(new Event('blur'));

  	fixture.detectChanges();

  	expect(lowerCaseDirectiveInputElement.value).toBe('yusuf musa yusuf');

  });

  it('should confirm directive element value have been lowercase' , () => {

  	lowerCaseDirectiveInputElement.value = 'YUSUF MUSA YUSUF';

  	lowerCaseDirectiveInputElement.dispatchEvent(new Event('blur'));

  	fixture.detectChanges();

  	expect(directive.el.nativeElement.value).toBe('yusuf musa yusuf');

  });

});
