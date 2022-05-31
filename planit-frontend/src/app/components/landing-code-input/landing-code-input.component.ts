import { Component, OnInit } from '@angular/core';
import { IdLookupService } from 'src/app/services/id-lookup.service';


@Component({
  selector: 'app-landing-code-input',
  templateUrl: './landing-code-input.component.html',
  styleUrls: ['./landing-code-input.component.scss']
})
export class LandingCodeInputComponent implements OnInit 
{
	errors = {
		isLengthWrong:false, //Init to false to prevent error from immediately showing
		isInvalid:false
	};

	constructor(private idLookupService:IdLookupService) { }

	ngOnInit(): void {
	}

	onKeyup(value:string): void
	{
		//Replace spaces in code with nothing to allow multiple input formats
		let stripped:string = value.replaceAll(" ", "");

		//When full code entered check if it is valid
		if (stripped.length == 9)
		{
			this.errors.isLengthWrong = false;

			this.idLookupService.getId(stripped).subscribe(planit => 
			{
				if (planit.id != "")
				{
					this.errors.isInvalid = false;
				}
				else
				{
					this.errors.isInvalid = true;
				}
			});
		}
		else
		{
			this.errors.isLengthWrong = true;
		}
	}

}
