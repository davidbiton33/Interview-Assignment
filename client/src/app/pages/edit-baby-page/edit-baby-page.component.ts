import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef  } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BabyFormComponent } from "../../components";
import { DataService } from "../../services";
import { BabiesResponse, Baby } from "../../models";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-edit-baby-page",
	standalone: true,
	imports: [CommonModule, BabyFormComponent],
	templateUrl: "./edit-baby-page.component.html",
	styleUrls: ["./edit-baby-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBabyPageComponent implements OnInit {
	id: string | null = null;
	baby!: BabiesResponse;
	dataIsReady!: boolean;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');

        if (this.id) {
            this.dataService.getBaby(this.id).subscribe({
                next: (baby) => {
                    this.baby = baby;
                    this.dataIsReady = true;
                    this.changeDetectorRef.detectChanges();
                },
                error: (error) => {
                    console.error('Error fetching baby:', error.message);
                },
            });
        } else {
            console.error('No baby ID provided.');
        }
    }
}
