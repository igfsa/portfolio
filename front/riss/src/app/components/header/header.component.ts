import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss']

})
export class HeaderComponent {

}
