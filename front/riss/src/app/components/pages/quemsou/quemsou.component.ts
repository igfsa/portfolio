import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'app-quemsou',
    imports: [CommonModule, AccordionModule, AnimateOnScrollModule],
    templateUrl: './quemsou.component.html',
    styleUrl: './quemsou.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
})
export class QuemsouComponent implements AfterViewInit{
  @ViewChild('light1') box1!: ElementRef;
  @ViewChild('light2') box2!: ElementRef;
  colors: string[] = ['#ff00ff','#ff0000','#00ff00','#0000ff', '#ffff00', '#ffa500', '#ffffff'];
  color1: string = '#ff0000';
  color2: string = '#00ff00';

  isJustified = signal<boolean>(false);

  toggleJustify() {
    this.isJustified.update(state => !state);
  }

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
