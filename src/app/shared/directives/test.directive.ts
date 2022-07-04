import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[testClick]'
})
export class TestDirective {
  constructor(
    public renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostListener('click', ['$event'])
  public handleClick(event: any): void {
    if (this.el.nativeElement.classList.contains('text-primary')) {
      const divElement = this.el.nativeElement.querySelector('div');
      this.renderer.removeClass(this.el.nativeElement, 'text-primary');
      this.renderer.removeChild(this.el.nativeElement, divElement);
    } else {
      const divElement = this.renderer.createElement('div');
      const textElement = this.renderer.createText('Test');
      this.renderer.appendChild(divElement, textElement);
      this.renderer.addClass(this.el.nativeElement, 'text-primary');
      this.renderer.appendChild(this.el.nativeElement, divElement);
    }
  }
}
