import { Directive, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mCarousel]'
})
export class MCarouselDirective implements AfterViewInit {
  @Input("mCarousel") options: Partial<M.CarouselOptions> = {};
  @Output("mInstance") mInstanceChange = new EventEmitter<M.Carousel>();

  constructor(private elRef: ElementRef<HTMLDivElement>) { }

  ngAfterViewInit() {
    // {...this.options} => permet l'ajout d'options par défaut avant le ...
    const instance = M.Carousel.init(this.Element, {duration: 500, ...this.options});
    //Lancement de l'évenement avec comme valeur une instance M.Carousel => voir new EventEmitter<M.Carousel>()
    this.mInstanceChange.emit(instance);
  }

  get Element(): Element {
    return this.elRef.nativeElement;
  }
}
