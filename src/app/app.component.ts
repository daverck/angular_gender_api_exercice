import { Component, AfterViewInit, ViewChild, ContentChild } from '@angular/core';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';
import { Produit } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Array<Produit> = [];

}
