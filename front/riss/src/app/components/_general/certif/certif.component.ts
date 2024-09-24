import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certif',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.scss', '../../../app.component.scss', '../../pages/dip-cert/dip-cert.component.scss']
})
export class CertifComponent {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;


    img: string[] =
    [
      '../../assets/certificados/git_github_GU.jpg',
      '../../assets/certificados/web_designer_css_html.jpg',
      '../../assets/certificados/programacao_C_C++_OneDayCode.jpg',
      '../../assets/certificados/programacao_C_GU.jpg',
      '../../assets/certificados/programacao_python_GU.jpg'
    ];

    desc: string[] =
    [
      'Certificado de curso de Git e GitHub na plataforma Udemy',
      'Certificado de curso de HTML e CSS para Web Design na plataforma Udemy',
      'Certificado de curso de Programação em C e C++ na plataforma Udemy',
      'Certificado de curso de Programação em C na plataforma Udemy',
      'Certificado de curso de Python na plataforma Udemy'
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
