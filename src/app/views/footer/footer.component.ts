import {  Component, HostListener, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const footer = this.elementRef.nativeElement.querySelector('.footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
      this.renderer.addClass(footer, 'fade-in');
    }
  }

}
