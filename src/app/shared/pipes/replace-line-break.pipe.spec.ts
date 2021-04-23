import { Component , DebugElement } from '@angular/core';
import { ReplaceLineBreakPipe } from './replace-line-break.pipe';
import { ComponentFixture , TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({

	'selector' : 'rsis-replace-line-break-pipe' ,

	'template' : `

				<p> {{text | replaceLineBreak}} </p>

	`

})

class ReplaceLineBreakComponentTestDrive {

	constructor() {


	}

	public text : string = 'I am a student of the Federal \n University \n of Technology Minna';

}

describe('ReplaceLineBreakPipe', () => {

	let pipe : ReplaceLineBreakPipe = null;

	let fixture : ComponentFixture<ReplaceLineBreakComponentTestDrive> = null;

	let component : ReplaceLineBreakComponentTestDrive = null;

	let hostElement : DebugElement = null;

	let replaceLineBreakParagraphElement : HTMLParagraphElement = null;

	let expectedOutput = 'I am a student of the Federal <br/> University <br/> of Technology Minna';

	beforeEach(() => {

		TestBed.configureTestingModule({

			declarations : [ReplaceLineBreakPipe , ReplaceLineBreakPipe]

		}).compileComponents();

	});

  it('create an instance', () => {

  	pipe = TestBed.inject(ReplaceLineBreakPipe);

  	fixture = TestBed.createComponent(ReplaceLineBreakComponentTestDrive);

  	component = fixture.componentInstance;

  	hostElement = fixture.debugElement.nativeElement;

  	replaceLineBreakParagraphElement = hostElement.query(By.css('p'));

    expect(pipe).toBeTruthy();

    expect(fixture).toBeTruthy();

    expect(component).toBeTruthy();

    expect(replaceLineBreakParagraphElement).toBeTruthy();
  
  });

  it('should confirm all \n have been replace with <br/>' , () => {

			const transformInput = pipe.transform(component.text);

			expect(transformInput).toBe(expectedOutput);  		

  });

  it('should confirm paragraph text have been changed with <br/>' , () => {

  	expect(replaceLineBreakParagraphElement.textContent).toBe(expectedOutput);

  });

});
