import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-projetos',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './projetos.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

}
