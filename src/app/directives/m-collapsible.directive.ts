import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import * as M from 'materialize-css';

@Directive({
  selector: '[mCollapsible]'
})
export class MCollapsibleDirective implements AfterViewInit, OnDestroy {
  /** Création d'un évenement permettant de donner l'instance du collapsible au composant */
  @Output() mInstance = new EventEmitter<M.Collapsible>();


  private instance: M.Collapsible;


  /**
   * 
   * @param elRef Correspond à la balise HTML dans la vue
   */
  constructor(private elRef: ElementRef<HTMLUListElement>) {}
 
  /**
   * LifeCycle hook s'execute avant la destruction de l'objet => permet de libérer la mémoire
   */
  ngOnDestroy(): void {
    console.log("DESTROY");
    this.instance.destroy();
  }
  /**
   * LifeCycle hook s'execute après l'initialisation de la vue !!!! la vue est déja visible
   */
  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
    console.log(this.elRef); //Element angular HTML
    console.log(this.elRef.nativeElement); //Element HTML Standar
    this.instance = M.Collapsible.init(this.elRef.nativeElement);

    this.mInstance.emit(this.instance);
  }
}
