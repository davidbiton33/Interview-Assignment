import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[CommonModule, RouterModule, HeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {


}
