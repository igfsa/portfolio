import { Component } from '@angular/core';
import { DiplomasComponent } from "../../general/diplomas/diplomas.component";
import { CertifComponent } from "../../general/certif/certif.component";

@Component({
  selector: 'app-dip-cert',
  standalone: true,
  imports: [DiplomasComponent, CertifComponent],
  templateUrl: './dip-cert.component.html',
  styleUrl: './dip-cert.component.scss'
})
export class DipCertComponent {

}
