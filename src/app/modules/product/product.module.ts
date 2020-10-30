import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductComponent, ProductEditComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
  ]
})
export class ProductModule { }
