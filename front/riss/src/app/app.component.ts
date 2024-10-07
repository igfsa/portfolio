import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DiplomasComponent } from "./components/_general/diplomas/diplomas.component";
import { CertifComponent } from "./components/_general/certif/certif.component";
import { DipCertComponent } from './components/pages/dip-cert/dip-cert.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { QuemsouComponent } from './components/pages/quemsou/quemsou.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DiplomasComponent, CertifComponent, DipCertComponent, HeaderComponent, HomeComponent, FooterComponent, ProjetosComponent, QuemsouComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'riss';


}
