import { Component, ElementRef, inject, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ConnectableObservable, delay } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss']

})
export class HeaderComponent {

  private offcanvasService = inject(NgbOffcanvas);

  constructor(private router: Router) {}

  // Function to scroll to contato section in home page
  // The ScrollTrigger plugin break the normal redirect because of the scrolling behavior changes
  // To fix this, when
  scrollToContato(){
    this.router.navigate(['']);

    delay(500);

    if (window.innerWidth < 768 ){
      if (ScrollTrigger.getAll().length != 0)
        {
          // Disabling ScrollTrigger in case of resize
          ScrollTrigger.disable();
        }

      document.location.href = ("#bg-contato")

      document.getElementsByTagName('html')[0].style.scrollbarWidth = 'auto';
      document.getElementsByTagName('html')[0].style.overscrollBehaviorX = 'hidden';
    } else {

      gsap.registerPlugin(ScrollToPlugin);

      delay(500);

      console.log(document.documentElement)

      let contato = document.querySelector('#bg-contato');

      let home = document.querySelector('#container-home');

      console.log(contato)

      console.log(home)

      if (contato) {
        gsap.to(document.documentElement, {scrollTo: contato});
      }
    }
  }


  // ngBootstrap function to open off canvas in the right side of screen
	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

}
