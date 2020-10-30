import {CategoryType, StateType} from './enums';

export class Produit {
    id: number;
    title: string;
    shortDescription: string;
    images: string;
    longDescription: string;
    price: number;
    category: CategoryType;
    state: StateType;
    inStock: boolean;
}