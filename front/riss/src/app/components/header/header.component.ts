import { Component, inject, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NgbModal, NgbTooltipModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgbTooltipModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss']

})

export class HeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
	private modalService = inject(NgbModal);
	closeResult = '';

  // ngBootstrap function to open off canvas in the right side of screen
	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', container: 'body', })
	}

}
