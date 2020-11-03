import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private ref : ElementRef
  ) { 
    // ref c'est l'élément surlequel on applique la directive
    console.log(ref.nativeElement);
    // ref.nativeElement.style.backgroundColor = "yellow";
    ref.nativeElement.classList.add('maClasse')
  }

}
