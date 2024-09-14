import { AfterViewInit, Component } from '@angular/core';
import { DiplomasComponent } from "../../general/diplomas/diplomas.component";
import { CertifComponent } from "../../general/certif/certif.component";
import { QuemsouComponent } from "../quemsou/quemsou.component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DiplomasComponent, CertifComponent, QuemsouComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../app.component.scss']
})

export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".scrollOpen", {
      x: "50%",
      duration: 5,
      scrollTrigger: {
        trigger: ".scrollOpen",
        start: "top 80%"
      }
    })
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      }
    });










  }

}
