import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models';
import { CategoryType, StateType } from 'src/app/models/enums';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Produit> = [];
  isLongDescriptionDisplayed = false;


  ngOnInit() {
    this.products.push(
      new Produit({id: 1, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 2, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 3, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: false} as Produit),
      new Produit({id: 4, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 5, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 6, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 7, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 8, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 9, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 10, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 11, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 12, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 13, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 14, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 15, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 16, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      new Produit({id: 17, title: "Bonjour", state: StateType.New, shortDescription: "Produit1", longDescription: 'Longue Description', price: 42.42, category: CategoryType.Electro, inStock: true} as Produit),
      )
  }
}
