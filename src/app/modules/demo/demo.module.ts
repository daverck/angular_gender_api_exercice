import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ToFarenheitPipe } from './pipes/to-farenheit.pipe';


@NgModule({
  declarations: [DemoComponent, Demo1Component, Demo2Component, HighlightDirective, ToFarenheitPipe],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
