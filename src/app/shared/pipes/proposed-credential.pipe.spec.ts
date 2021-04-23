import { Component , DebugElement , ViewChild , ElementRef } from '@angular/core';
import { ProposedCredentialPipe } from './proposed-credential.pipe';
import { TestBed , ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({

	'selector' : 'rsis-proposed-credential-pipe' ,

	'template' : `

			<input type ='hidden' name ='proposal' [value] ='entry | proposedCredential' #proposedCredential>

			`

})
class ProposedCredentialComponentTestDrive {

		constructor() {

		}

		public entry : string = 'Abdulazeez Yusuf';
}

describe('ProposedCredentialPipe', () => {

	let pipe : ProposedCredentialPipe = null;

	let fixture : ComponentFixture<ProposedCredentialComponentTestDrive> = null;

	let component : ProposedCredentialComponentTestDrive = null;

  let hostElement : DebugElement = null;

  let proposedCredentialInputElement : HTMLInputElement = null;

	beforeEach(() => {

		expect(pipe).toBeNull();

		expect(fixture).toBeNull();

		expect(component).toBeNull();

		expect(pipe).toBeNull();

		expect(hostElement).toBeNull();

		expect(proposedCredentialInputElement).toBeNull();

		TestBed.configureTestingModule({

			declarations : [ProposedCredentialPipe , ProposedCredentialComponentTestDrive] ,

			imports : [ReactiveFormsModule]

		}).compileComponents();

	});

  it('create an instance and verify other instances have been initialized' , () => {

    pipe = TestBed.inject(ProposedCredentialPipe);

    fixture = TestBed.createComponent(ProposedCredentialComponentTestDrive);

    component = fixture.componentInstance;

    hostElement = fixture.debugElement.nativeElement;

    expect(pipe).not.toBeTruthy();

    expect(fixture).not.toBeNull();

    expect(component).not.toBeNull();

    expect(hostElement).not.toBeNull();

  });

  it('should confirm that input have been lowercased' , () => {

  		let expectedOutput : string = null;

  		const expectedInput : { [key : string] : any } = { 'author' : {'full_name' : 'Abdulazeez Yusuf'}};

  		expectedOutput = pipe.transform(expectedInput);

  		expect(expectedOutput).toBe('abdulazeezyusuf');

  });

  it('should confirm that input element value have been lowercased' , () => {

  		proposedCredentialInputElement = hostElement.query(By.css('input'));

  		expect(proposedCredentialInputElement.value).toBe('abdulazeezyusuf');

  });

  it('should convert input element value to a lowercase' , () => {

  	component.entry = 'Mufliha Abdullahi';

  	fixture.detectChanges();

  	expect(proposedCredentialInputElement.value).toBe('muflihaabdullahi');

  });



});
