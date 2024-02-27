import { ChangeDetectionStrategy, Component, OnInit, Input } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Baby } from "../../models/baby.interface";
import { DataService } from "../../services";
import { BabiesResponse } from "../../models";

@Component({
	selector: "app-baby-form",
	templateUrl: "./baby-form.component.html",
	styleUrls: ["./baby-form.component.css"],
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BabyFormComponent implements OnInit {
	@Input() babyResponse? : BabiesResponse;
	babyForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dataService: DataService,
		private router: Router,
	) {}

  ngOnInit() {
    this.initForm();
    if (this.babyResponse && !Array.isArray(this.babyResponse.data) && this.babyResponse.data) {
        this.babyForm.patchValue(this.babyResponse.data);
    }
}

	initForm(): void {
		this.babyForm = this.babyResponse
			? this.fb.group({
					_id: [""],
					birthday: ["", Validators.required],
					weight: [null, Validators.required],
					height: [null, Validators.required],
					parentsName: ["", Validators.required],
					hairColor: [""],
			  })
			: this.fb.group({
					birthday: ["", Validators.required],
					weight: [null, Validators.required],
					height: [null, Validators.required],
					parentsName: ["", Validators.required],
					hairColor: [""],
			  });
	}

	onSubmit(): void {
		if (this.babyForm.valid) {
			const babyData: Baby = this.babyForm.value;
			if (babyData._id) {
				this.dataService.updateBaby(babyData).subscribe(() => {
					this.dataService.fetchBabies();
          alert("Success to update data !")
					this.router.navigate(["/all-babies"]);
				});
			} else {
				this.dataService.createBaby(babyData).subscribe(() => {
					this.dataService.fetchBabies();
          alert("New baby added !")
					this.router.navigate(["/all-babies"]);
				});
			}
		}
	}
}
