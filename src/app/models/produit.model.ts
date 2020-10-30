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

    constructor(obj?: Produit) {
        console.log(obj);
        this.id = obj && obj.id || 0; //Si j'ai un obj != null && que cet obj possède un id && que l'id != null alors renvoi l'id sinon 0
        this.title = obj && obj.title || "";
        this.shortDescription = obj && obj.shortDescription || "";
        this.longDescription = obj && obj.longDescription || "";
        this.price = obj && obj.price || 0;
        this.category = obj && obj.category || CategoryType.Electro;
        this.state = obj && obj.state || StateType.New;
        this.inStock = obj && obj.inStock == true;
    }
}