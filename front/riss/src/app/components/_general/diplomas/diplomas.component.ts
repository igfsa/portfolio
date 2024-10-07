import { Component, importProvidersFrom, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-diplomas',
  standalone: true,
  imports: [NgbCarouselModule, ImageModule, CommonModule ],
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.scss', '../../../app.component.scss', '../../pages/dip-cert/dip-cert.component.scss']
})
export class DiplomasComponent {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;


    img: string[] =
    [
      '../../assets/diplomas/COLTEC.jpg',
      '../../assets/diplomas/NP.png'
    ];

    desc: string[] =
    [
      'Diploma do curso técnico integrado com o médio em Automação Industrial',
      'Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas'
    ];


  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
