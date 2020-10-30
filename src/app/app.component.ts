import { Component, AfterViewInit, ViewChild, ContentChild, OnInit } from '@angular/core';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';
import { Produit } from './models';
import { StateType } from './models/enums';
import { CategoryType } from './models/enums/category-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  color: string;
  ngOnInit(): void {
    
  }
  
}
