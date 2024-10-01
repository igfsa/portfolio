import { Element } from '@angular/compiler';
import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { gsap, random } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { delay } from 'rxjs';


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
    this.barRoll();
    this.firework();
    this.techno();

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

  barRoll(): void{
    let amount = 15;
    let area = document.getElementById('bg-quem-sou-home');
    let i = 0;
    while(i < amount){

      let drop = document.createElement("i");

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

  firework(): void{



    let amount = 10;

    let i = 0;
    while(i < amount){
      let fire = this.fireTail();

      fire.onanimationend = async () => {
        console.log(parseInt(fire.style.animationDuration ) * 1000);
        await delay(parseInt(fire.style.animationDuration ) * 1000);
        let fireDrop = this.fireExplosion(fire);

        return
      }


      i++;
    }
  }

  techno(): void{
    let amount = 50;
    let area = document.getElementById('bg-projetos-home');
    let i = 0;
    while(i < amount){
      let drop = document.createElement("i");

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

  fireTail(): HTMLElement{
    let area = document.getElementById('bg-dip-cert-home');
    let drop = document.createElement("i");

    drop.style.backgroundColor = 'var(--rain)';
    drop.style.borderRadius = '50%';
    drop.style.position = 'absolute';
    drop.style.zIndex = '-1';

    let size = (Math.random() * 10) + 5;

    drop.style.height = size + 'px';
    drop.style.width = size + 'px';

    let delay = Math.random() * -20;
    let duration = Math.random() * 15;
    let posX = Math.random() * window.innerWidth;
    let aux_runX = (Math.random() * window.innerWidth / 5);
    let runY = (Math.random() * window.innerHeight / 2) + (window.innerHeight / 3);

    drop.style.setProperty("--posY", "0px");
    drop.style.setProperty("--runY", -runY + "px");
    drop.style.setProperty("--posX", posX + "px");

    if (Math.floor(Math.random() * 2) % 2 == 1){
      drop.style.setProperty("--runX", posX - aux_runX + "px");
    } else {
      drop.style.setProperty("--runX", posX + aux_runX + "px");
    }

    drop.style.setProperty("--width", size + "px");
    drop.style.setProperty("--height", size + "px");

    drop.style.setProperty("--delay", delay + "s");
    drop.style.setProperty("--duration", 1 + duration + "s");

    drop.style.left = posX + 'px';
    drop.style.bottom = '0' ;

    drop.style.animation = 'fireworkX 2.5s 1 ease-in';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration +'s';

    drop.classList.add("firework");

    drop.style.shapeRendering;

    area?.appendChild(drop);

    return drop;
  }

  fireExplosion(drop: HTMLElement): HTMLElement{
    let j = 0;

    let size = (Math.random() * 3) + 2;

    while (j < 10){
      let dropDot = document.createElement("i");

      dropDot.style.backgroundColor = 'var(--rain)'
      dropDot.style.borderRadius = '50%'
      dropDot.style.position = 'absolute';
      dropDot.style.zIndex = '-1'

      dropDot.style.height = size + 'px';
      dropDot.style.width = size + 'px';

      dropDot.style.rotate = j * 36 + 'deg';

      let posX = drop.style.getPropertyValue("--runX");
      let posY = drop.style.getPropertyValue("--runY");

//      let aux_posYIni = drop.style.getPropertyValue("--runY");
      let aux_posXIni = drop.style.getPropertyValue("--posX");

      let aux_runY = parseFloat(posY.replace(/[^0-9],/g, ''));
      let runY = ( aux_runY / 10 ) -  parseFloat(posY.replace(/[^0-9],/g, '')) ;

      let aux_posX = parseFloat(posY.replace(/[^0-9],/g, ''));
      let aux_runX = aux_posX - parseFloat(aux_posXIni.replace(/[^0-9],/g, '')) ;

      let runX

      if (parseFloat(aux_posXIni.replace(/[^0-9],/g, ''))  < aux_runX){
        runX = ( aux_runX / 10 ) + posX;
      } else {
        runX = - ( aux_runX / 10 ) + posX;
      }

      dropDot.style.setProperty("--posX", posX);
      dropDot.style.setProperty("--posY", posY);
      dropDot.style.setProperty("--runX", runX + "px");
      dropDot.style.setProperty("--runY", -runY + "px");

      dropDot.style.setProperty("--delay", '0s');
      dropDot.style.setProperty("--duration", '2s');

      dropDot.style.left = posX + 'px';
      dropDot.style.bottom = posY + 'px';

      dropDot.style.animation = 'fireworkX 2.5s 1 ease-in'
      dropDot.style.animationDelay = '0s';
      dropDot.style.animationDuration = '2s';

      dropDot.classList.add("firework");

      drop.appendChild(dropDot);

      j++;
    }

    return drop;
  }


}
