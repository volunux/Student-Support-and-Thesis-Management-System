import { CapitalizeDirective } from './capitalize.directive';
import { Component , DebugElement } from '@angular/core';
import { ReactiveFormsModule , FormGroup , FormControl } from '@angular/forms';
import { ComponentFixture , TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({

	'selector' : 'rsis-capitalize-directive-component' ,

	'template' : `

<div *ngIf ='entryForm' class ='' [formGroup] ='entryForm'>

			<div *ngIf ='first_name' class ='form-group'>

				<label for ='first_name'> First Name * : </label>

				<input type ='text' name ='first_name' formControlName ='first_name' appCapitalize ='appCapitalize'>

			</div>

		</div>

		<button (click) ='changeInputElementValueToCapitalize()'> Change Input Element Value </button> 

	`

})

class CapitalizeDirectiveComponentTestDrive {

	constructor() {


	}

	public entryForm : FormGroup = null;

	get first_name() : FormControl {

		return this.entryForm.get('first_name') as FormControl;
	}

	public changeInputElementValueToCapitalize() : void {

		this.first_name.setValue('yusuf');
	}

}

describe('CapitalizeDirective', () => {

	let directive : CapitalizeDirective = null;

	let component : CapitalizeDirectiveComponentTestDrive = null;

	let fixture : ComponentFixture<CapitalizeDirectiveComponentTestDrive> = null;

	let hostElement : DebugElement = null;

	let capitalizeDirectiveInputElement : HTMLInputElement = null;

	beforeEach(() => {

		TestBed.configureTestingModule({

			declarations : [CapitalizeDirective , CapitalizeDirectiveComponentTestDrive] ,

			imports : [ReactiveFormsModule]

		}).compileComponents();

	});

	it('should confirm properties are null' , () => {

		expect(directive).toBeNull();

		expect(component).toBeNull();

		expect(fixture).toBeNull();

		expect(capitalizeDirectiveInputElement).toBeNull();

		expect(hostElement).toBeNull();

	});

  it('should create an instance', () => {
	
  	directive = TestBed.inject(CapitalizeDirective);

  	fixture = TestBed.createComponent(CapitalizeDirectiveComponentTestDrive);

  	component = fixture.componentInstance;

  	component.entryForm = new FormGroup({'first_name' : new FormControl('')});

  	hostElement = fixture.debugElement;

    expect(directive).toBeTruthy();

    expect(fixture).toBeTruthy();

    expect(component).toBeTruthy();

    expect(component.entryForm).toBeTruthy();

    expect(component.first_name).toBeTruthy();

    fixture.detectChanges();

  });

  it('should create instance of input element' , () => {

  		capitalizeDirectiveInputElement = hostElement.nativeElement.query(By.css('input')) as HTMLInputElement; 

  		expect(capitalizeDirectiveInputElement).toBeTruthy();

  });

  it('should change form control value' , () => {

  	component.changeInputElementValueToCapitalize();

  	fixture.detectChanges();

  	expect(capitalizeDirectiveInputElement.value).toBe('Yusuf');

  });

  it('should change input element value' , () => {

  	capitalizeDirectiveInputElement.value = 'yusuf';

  	capitalizeDirectiveInputElement.dispatchEvent(new Event('blur'));

  	fixture.detectChanges();

  	expect(capitalizeDirectiveInputElement.value).toBe('Yusuf');

  });

  it('should confirm capitalization of one or more words' , () => {

  	capitalizeDirectiveInputElement.value = 'yusuf musa yusuf';

  	capitalizeDirectiveInputElement.dispatchEvent(new Event('blur'));

  	fixture.detectChanges();

  	expect(capitalizeDirectiveInputElement.value).toBe('Yusuf Musa Yusuf');

  });

  it('should confirm input element value have been lowercase through directive instance property' , () => {

  	capitalizeDirectiveInputElement.value = 'hauwa yusuf musa fari';

  	capitalizeDirectiveInputElement.dispatchEvent(new Event('blur'));

  	fixture.detectChanges();

  	expect(directive.el.nativeElement.value).toBe('Hauwa Yusuf Musa Fari');

  });

});
