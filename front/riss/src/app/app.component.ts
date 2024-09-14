import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DiplomasComponent } from "./components/general/diplomas/diplomas.component";
import { CertifComponent } from "./components/general/certif/certif.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DiplomasComponent, CertifComponent, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'riss';
}
