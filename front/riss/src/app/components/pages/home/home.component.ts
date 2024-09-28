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
    this.techno();
    this.barRoll();

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
