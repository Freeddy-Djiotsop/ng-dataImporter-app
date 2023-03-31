import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setHeight();
    this.setBorder();
  }
  setBorder(color: string = '#f5f5f5') {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
  setHeight(height: number = 250) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  @Input('pokemonBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder();
  }

}
