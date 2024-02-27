import { Component } from '@angular/core';
import { BabyFormComponent } from '../../components';

@Component({
  selector: 'app-add-baby-page',
  standalone: true,
  imports: [BabyFormComponent],
  templateUrl: './add-baby-page.component.html',
  styleUrl: './add-baby-page.component.scss'
})
export class AddBabyPageComponent {

}
