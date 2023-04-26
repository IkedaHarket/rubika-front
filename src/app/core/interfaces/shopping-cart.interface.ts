import { RubikProduct } from "../class";

export interface ShoppingCart {
    products: ShoppingProduct[];
}
export interface ShoppingProduct{
    rubikProduct: RubikProduct;
    units:number;
}