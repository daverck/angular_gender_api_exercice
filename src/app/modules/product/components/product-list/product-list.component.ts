import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models';
import { CategoryType, StateType } from 'src/app/models/enums';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Produit> = [];
  isLongDescriptionDisplayed = false;

  constructor(public productService: ProductService) {}


  ngOnInit() {
    this.products = this.productService.List;
  }
}
