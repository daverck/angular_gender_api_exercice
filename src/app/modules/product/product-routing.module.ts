import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';

export const PRODUCT_ROUTES: Routes = [
    {path: '', component: ProductComponent, data: { breadCrumb: "Product" }, children: [
        { path: ':id', component: ProductEditComponent, data: { breadCrumb: "Edit"}}
    ]} //Ecran correspondant à la route
]

@NgModule({
    imports: [RouterModule.forChild(PRODUCT_ROUTES)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}