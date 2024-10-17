import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-diplomas',
  standalone: true,
  imports: [
    ImageModule,
   ],
  templateUrl: './diplomas.component.html',
  styleUrls: ['./diplomas.component.scss', '../../../app.component.scss', '../../pages/dip-cert/dip-cert.component.scss'],
  animations: [  ]
})
export class DiplomasComponent {



}
