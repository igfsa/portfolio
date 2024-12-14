import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { DipCertComponent } from './components/pages/dip-cert/dip-cert.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { QuemsouComponent } from './components/pages/quemsou/quemsou.component';

import { routes } from './app.routes';
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DipCertComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProjetosComponent,
    QuemsouComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'riss';
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Custom scroll restoration for each navigation
        window.scrollTo(0, 0);

        // Check if the current route is the home page
        this.showFooter = event.url !== '/'; // Hide footer on home page ('/')

      }
    });
  }

  ngOnInit(){
    // Animate on Scroll init
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    // Restarting AOS on each navigation change with a delay
    // Avoid AOS rendering elements on page leave instead of page enter
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh()
      }, 500)
      }
    });

    this.router.resetConfig(routes);
  }

}
