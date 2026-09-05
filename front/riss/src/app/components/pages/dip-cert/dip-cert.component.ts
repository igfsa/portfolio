import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';


@Component({
    selector: 'app-dip-cert',
    imports: [
    ImageModule,
    GalleriaModule
],
    templateUrl: './dip-cert.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './dip-cert.component.scss'
})
export class DipCertComponent {

	isCollapsed = true;

  imagesDip =
  [
    {img: '../../assets/diplomas/NP.png', desc: "Especialização em Desenvolvimento de sistemas com C#"},
    {img: '../../assets/diplomas/COLTEC.png', desc: 'Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas'},
    {img: '../../assets/diplomas/UNICIVE.png', desc: 'Diploma do curso técnico integrado com o médio em Automação Industrial'}
  ];

  imagesCert =
  [
    {img: '../../assets/certificados/git_github_GU.jpg', desc: 'Certificado de curso de Git e GitHub na plataforma Udemy'},
    {img: '../../assets/certificados/web_designer_css_html.jpg', desc: 'Certificado de curso de HTML e CSS para Web Design na plataforma Udemy'},
    {img: '../../assets/certificados/programacao_C_C++_OneDayCode.jpg', desc: 'Certificado de curso de Programação em C e C++ na plataforma Udemy'},
    {img: '../../assets/certificados/programacao_C_GU.jpg', desc: 'Certificado de curso de Programação em C na plataforma Udemy'},
    {img: '../../assets/certificados/programacao_python_GU.jpg', desc: 'Certificado de curso de Python na plataforma Udemy'},
  ];

}
