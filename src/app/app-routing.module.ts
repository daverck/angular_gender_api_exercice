import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';


export const APP_ROUTING: Routes = [
  {path: 'page2', component: Page2Component, data: { breadCrumb: 'Contact'}, children: [
    {path: 'page3/:id', component: Page3Component, data: {breadCrumb: 'Page3'}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
