import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProjetosComponent } from './components/pages/projetos/projetos.component';
import { QuemsouComponent } from './components/pages/quemsou/quemsou.component';
import { FooterComponent } from './components/footer/footer.component';
import { DipCertComponent } from './components/pages/dip-cert/dip-cert.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'quem-sou', component: QuemsouComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'dip-cert', component: DipCertComponent}

];
