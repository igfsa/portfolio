import { AfterViewInit, Component, inject, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ModalDismissReasons, NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgbTooltipModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../app.component.scss'],
})

export class HomeComponent implements AfterViewInit{

	private modalService = inject(NgbModal);
	closeResult = '';

  ngAfterViewInit(): void {
    // functions to start and/or refresh gsap ScrollTrigger
    // without it, the scroll position when leaving and reentering the page is sent to other value than the begin
    if (!ScrollTrigger.getAll())
    {
      console.log(ScrollTrigger.getAll().length)
      ScrollTrigger.refresh();

    }

    ScrollTrigger.enable();


    // background effects function
    this.rain();
    this.techno();
    this.barRoll();

    // gsap enable and configuration for horizontal scrolling
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container-home",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });

  }

  ngOnDestroy(){
    // functions to stop gsap ScrollTrigger when leaving page
    // without it, the scroll behavior when changing components still the same as this page
    ScrollTrigger.disable();
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

  rain(): void{
    let amount = 100;
    let area = document.getElementById('bg-main');
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
