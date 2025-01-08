import { AfterViewInit, Component, inject, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ModalDismissReasons, NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgbTooltipModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../app.component.scss'],
})

export class HomeComponent implements AfterViewInit{

	private modalService = inject(NgbModal);
	closeResult = '';

  ngAfterViewInit(): void {

    this.conditionScrollTrigger();

    // background effects function
    this.rain();
    this.techno();
    this.barRoll();


    // recall functions at page resizing to adjust background and ScrollTrigger
    window.addEventListener('resize', () => {
      this.conditionScrollTrigger();

      this.rain();
      this.techno();
      this.barRoll();
    } );
  }

  ngOnDestroy(){
    // Function to stop gsap ScrollTrigger and erase the settings when leaving page
    // Without it, the scroll behavior when changing components still the same as this page
    // On leave and reentering of the page, previous settings can cause some bugs in the plugin reactivation
    if (ScrollTrigger.getAll().length > 0)
    {
      ScrollTrigger.killAll();
    }

    // Setting scrollbars to auto, avoiding problems on pages change
    document.getElementsByTagName('html')[0].style.scrollbarWidth = 'auto';
    document.getElementsByTagName('html')[0].style.overscrollBehaviorX = 'auto';
  }

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  // Function to check view size and conditionally apply scroll trigger
  conditionScrollTrigger(): void{
    if(window.innerWidth < 768 || 'ontouchstart' in window){
      if (ScrollTrigger.getAll().length != 0)
      {
        // Disabling ScrollTrigger in case of resize
        ScrollTrigger.disable();
      }

      // Visually showing the scrollbar and inactivating in the X axis
      document.getElementsByTagName('html')[0].style.scrollbarWidth = 'auto';
      document.getElementsByTagName('html')[0].style.overscrollBehaviorX = 'hidden';
    }
    else{
      // Function to start gsap ScrollTrigger. Needed when entering/reentering page or resizing from a screen size without the gsap use
      ScrollTrigger.enable();

      // Conditional to check if the ScrollTrigger parameters are not set and if true, register the parameters
      // Without it, a duplicated write of the parameters causes a bug in the page view not rendering or not activating properly
      if (ScrollTrigger.getAll().length == 0)
      {
        // gsap configuration for horizontal scrolling
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#container-home",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
          }
        });

      }

      // visually hiding the scrollbar without inactivating it. Visual purposes
      document.getElementsByTagName('html')[0].style.scrollbarWidth = 'none';
    }
  }

  rain(): void{
    let amount = 100;
    let area = document.getElementById('bg-main');

    const elements = document.querySelectorAll('.rain-drop');
    elements.forEach(element => element.remove());

    let i = 0;
    while(i < amount){
      let drop = document.createElement("i");
      drop.classList.add("rain-drop");
      drop.style.height = (window.innerHeight * 0.12) + 'px';
      drop.style.position = 'absolute';
      drop.style.zIndex = '-1'
      drop.style.rotate = '-30deg'
      drop.style.borderBottomRightRadius = '10px';
      drop.style.borderBottomLeftRadius = '10px';
      drop.style.background = 'linear-gradient(transparent, var(--rain))';
      drop.style.animation = `animate-Y 10s linear infinite`;

      let auxX = window.innerWidth * 0.5;

      let size = Math.random() * 2;
      let posX = Math.floor(Math.random() * window.innerWidth) * 1.5;
      let delay = Math.random() * -20;
      let duration = Math.random() * 10;

      drop.style.width = 0.2 + size + 'px';
      drop.style.left = posX - auxX + 'px';
      drop.style.animationDelay = delay + 's';
      drop.style.animationDuration = 1 + duration +'s';

      area?.appendChild(drop);
      i++;
    }
  }

  techno(): void{
    let amount = 50;
    let area = document.getElementById('bg-projetos-home');
    let i = 0;

    const elements = document.querySelectorAll('.techno-drop');
    elements.forEach(element => element.remove());

    while(i < amount){

      let drop = document.createElement("i");

      drop.classList.add("techno-drop");
      drop.style.height = (window.innerHeight * 0.36) + 'px';
      drop.style.position = 'absolute';
      drop.style.zIndex = '-1'
      drop.style.borderBottomRightRadius = '10px';
      drop.style.borderBottomLeftRadius = '10px';
      drop.style.background = 'linear-gradient(transparent, var(--rain))';
      drop.style.display = 'flex';
      drop.style.justifyContent = 'center';
      drop.style.alignItems = 'end';

      let size = Math.random() + 1;
      let delay = Math.random() * -20;
      let duration = Math.random() * 15;
      let posX;
      let posY;

      if (i % 4 == 3){
        posX = Math.floor(Math.random() * window.innerWidth);
        drop.style.left = posX + 'px';
        drop.style.animation = `animate-Y 5s linear infinite`;
      } else if (i % 4 == 2){
        drop.style.rotate = '90deg'
        posY = Math.floor(Math.random() * window.innerHeight);
        drop.style.top = posY + 'px';
        drop.style.animation = `animate-X 5s linear infinite`;
      } else if (i % 4 == 1){
        drop.style.rotate = '180deg'
        posX = Math.floor(Math.random() * window.innerWidth);
        drop.style.right = posX + 'px';
        drop.style.animation = `animate-Y 5s linear infinite`;
      } else {
        drop.style.rotate = '270deg'
        posY = Math.floor(Math.random() * window.innerHeight);
        drop.style.bottom = posY + 'px';
        drop.style.animation = `animate-X 5s linear infinite`;
      }

      drop.style.width = 0.2 + size + 'px';
      drop.style.animationDelay = delay + 's';
      drop.style.animationDuration = 1 + duration +'s';

      let dropDot = document.createElement("i");
      dropDot.style.height = (0.2 + size) * 1.5 + 'px';
      dropDot.style.width = (0.2 + size) * 1.5 + 'px';
      dropDot.style.padding = (0.2 + size) * 1.5 + 'px';
      dropDot.style.backgroundColor = 'var(--rain)'
      dropDot.style.borderRadius = '50%'

      drop.appendChild(dropDot);

      drop.style.shapeRendering;

      area?.appendChild(drop);
      i++;
    }
  }

  barRoll(): void{
    let amount = 15;
    let area = document.getElementById('bg-quem-sou-home');

    const elements = document.querySelectorAll('.bar-drop');
    elements.forEach(element => element.remove());

    let i = 0;
    while(i < amount){

      let drop = document.createElement("i");

      drop.classList.add("bar-drop");
      drop.style.height = (Math.random() * (window.innerHeight * 0.02)) + (window.innerHeight * 0.005) + 'px';
      drop.style.position = 'absolute';
      drop.style.zIndex = '-1'
      drop.style.borderBottomRightRadius = '5px';
      drop.style.borderBottomLeftRadius = '5px';
      drop.style.background = 'linear-gradient(transparent, var(--rain))';
      drop.style.animation = `animate-Y 10s reverse infinite`;

      let size = (Math.random() * (window.innerHeight * 0.3)) + (window.innerHeight * 0.05);
      let posX = Math.floor(Math.random() * window.innerWidth) - (window.innerWidth * 0.1);
      let delay = Math.random() * -20;
      let duration = Math.random() * 15;

      drop.style.width = size + 'px';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = delay + 's';
      drop.style.animationDuration = 5 + duration +'s';

      area?.appendChild(drop);
      i++;
    }
  }

}
