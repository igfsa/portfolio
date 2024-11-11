import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appViewportAnimationBar]',
  standalone: true
})
export class ViewportAnimationBarDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Animation that sets the begin of animation when user roll the viewport to element section
  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate-bar');
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }

}
