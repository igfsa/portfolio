import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { routes } from './app.routes';
import AOS from 'aos'

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
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
