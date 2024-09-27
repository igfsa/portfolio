import { Element } from '@angular/compiler';
import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../app.component.scss'],
})

export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    this.rain();

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

  rain(): void{
    let amount = 100;
    let area = document.getElementById('bg-chuva');
    let i = 0;
    while(i < amount){
      let drop = document.createElement("i");
      drop.classList.add("rain-drop");
      drop.style.height = '100px';
      drop.style.position = 'absolute';
      drop.style.zIndex = '-1'
      drop.style.rotate = '-30deg'
      drop.style.borderBottomRightRadius = '10px';
      drop.style.borderBottomLeftRadius = '10px';
      drop.style.background = 'linear-gradient(transparent, var(--rain))';
      drop.style.animation = `animate-rain 5s linear infinite`;

      let auxX = window.innerWidth * 0.4;

      let size = Math.random() * 2;
      let posX = Math.floor(Math.random() * window.innerWidth) * 1.4;
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



}
