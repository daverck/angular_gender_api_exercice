import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const APP_ROUTING: Routes = [
  {path: 'product', data: {breadCrumb: "Product"}, loadChildren: () => import("./modules/product/product.module").then(m => m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTING)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
