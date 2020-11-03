import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';


export const APP_ROUTING: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'product', data: {breadCrumb: "Product"}, loadChildren: () => import("./modules/product/product.module").then(m => m.ProductModule)},
  { path: 'demo', loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule) },
  { path: 'gender', loadChildren: () => import('./modules/gender/gender.module').then(m => m.GenderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
