import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';

import { DemoComponent } from './demo.component';

const routes: Routes = [
  { path: '', component: DemoComponent, children: [
    { path: 'demo1', component: Demo1Component },
    { path: 'demo2', component: Demo2Component },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
