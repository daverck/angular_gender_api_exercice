import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';
import { ProductResolver } from './resolvers/product.resolver';

export const PRODUCT_ROUTES: Routes = [
    {path: '', component: ProductComponent, children: [
        { path: ':id', component: ProductEditComponent, data: { breadCrumb: "Edit"}, resolve: {product: ProductResolver}}
    ]} //Ecran correspondant à la route
]

@NgModule({
    imports: [RouterModule.forChild(PRODUCT_ROUTES)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}