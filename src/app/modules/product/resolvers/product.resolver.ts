import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/models';
import { ProductService } from '../services/product.service';

@Injectable({
    providedIn: "root"
})
export class ProductResolver implements Resolve<Produit> {

    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Produit | Observable<Produit> | Promise<Produit> {
        const id = route.paramMap.get("id");

        if (id != null) {
            const product = this.productService.getProductByTitle(id);
            return Promise.resolve(product);
        }

        return Promise.reject("Cannot find product with id="+ id);
    }
    
}