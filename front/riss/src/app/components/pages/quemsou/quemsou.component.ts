import { Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ViewportAnimationBarDirective } from '../../../directive/viewportAnimation/viewport-animation-bar.directive';

import { viewport } from '@popperjs/core';

@Component({
  selector: 'app-quemsou',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, ViewportAnimationBarDirective],
  templateUrl: './quemsou.component.html',
  styleUrl: './quemsou.component.scss'
})
export class QuemsouComponent implements AfterViewInit{
  @ViewChild('light1') box1!: ElementRef;
  @ViewChild('light2') box2!: ElementRef;
  colors: string[] = ['#ff00ff','#ff0000','#00ff00','#0000ff', '#ffff00', '#ffa500', '#ffffff'];
  color1: string = '#ff0000';
  color2: string = '#00ff00';

	isCollapsed = true;

  ngAfterViewInit() {
    this.box1.nativeElement.addEventListener('animationiteration', () => {
      this.changeColor1();
    });

    this.box2.nativeElement.addEventListener('animationiteration', () => {
      this.changeColor2();
    });
  }

  changeColor1() {
    this.color1 = this.colors[Math.floor(Math.random()*7)];
  }

  changeColor2() {
    this.color2 = this.colors[Math.floor(Math.random()*7)];
  }
}
