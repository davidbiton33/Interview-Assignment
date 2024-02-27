import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

import { Baby } from "../../models";
import { DataService } from '../../services';


@Component({
	selector: "app-babies-table",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./babies-table.component.html",
	styleUrl: "./babies-table.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BabiesTableComponent{

  @Input() babies : Baby[] | null = [];

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  editBaby(babyId: string): void {
    this.router.navigate(['edit-baby', babyId]);
  }

  deleteBaby(babyId: string): void {
    if (confirm('Are you sure you want to delete this baby?')) {
      this.dataService.deleteBaby(babyId);
    }
  }


}
