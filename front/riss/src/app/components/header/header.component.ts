import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { Drawer, DrawerModule } from 'primeng/drawer';
import { DialogModule  } from 'primeng/dialog';


@Component({
    selector: 'app-header',
    imports: [
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
      DrawerModule,
      Drawer,
      DialogModule
    ],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./header.component.scss', '../../app.component.scss']
})

export class HeaderComponent {

  menuVisible: boolean = false;

  contatoVisible: boolean = false;

}
