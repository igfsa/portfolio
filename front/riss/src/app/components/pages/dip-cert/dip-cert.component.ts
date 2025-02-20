import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dip-cert',
  standalone: true,
  imports: [ ImageModule, CommonModule, NgbCollapseModule, NgbTooltipModule ],
  templateUrl: './dip-cert.component.html',
  styleUrl: './dip-cert.component.scss',
})
export class DipCertComponent {

	isCollapsed = true;

  // used in the html component in the for loops to auto create elements over the string iteration

  img_dip: string[] =
  [
    '../../assets/diplomas/NP.png',
    '../../assets/diplomas/COLTEC.jpg',
    '../../assets/media/rocket.png'
  ];

  descr_dip: string[] =
  [
    'Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas',
    'Diploma do curso técnico integrado com o médio em Automação Industrial',
    "Em curso: Especialização em Desenvolvimento de sistemas com C#. Previsão de conclusão: 02/2026"
  ];

  img_cert: string[] =
  [
    '../../assets/certificados/git_github_GU.jpg',
    '../../assets/certificados/web_designer_css_html.jpg',
    '../../assets/certificados/programacao_C_C++_OneDayCode.jpg',
    '../../assets/certificados/programacao_C_GU.jpg',
    '../../assets/certificados/programacao_python_GU.jpg',
  ];

  descr_cert: string[] =
  [
    'Certificado de curso de Git e GitHub na plataforma Udemy',
    'Certificado de curso de HTML e CSS para Web Design na plataforma Udemy',
    'Certificado de curso de Programação em C e C++ na plataforma Udemy',
    'Certificado de curso de Programação em C na plataforma Udemy',
    'Certificado de curso de Python na plataforma Udemy',
  ];

}
