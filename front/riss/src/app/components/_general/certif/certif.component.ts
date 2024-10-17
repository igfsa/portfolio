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

}
