import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { LoaderService } from "../../services";

import { Baby } from "../../models";
import { DataService } from "../../services";
import { BabiesTableComponent, LoaderComponent} from "../../components";

@Component({
	selector: "app-home-page",
	standalone: true,
	imports: [CommonModule, BabiesTableComponent, LoaderComponent],
	templateUrl: "./home-page.component.html",
	styleUrl: "./home-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
	showLoader$ = this.loaderService.loadingAction$;
	babies$: Observable<Baby[]>;

	constructor(
		private loaderService: LoaderService,
		private dataService: DataService,
	) {
		this.babies$ = this.dataService.babies$;
	}


}
