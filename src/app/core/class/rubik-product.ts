import { RubikProductProps } from "../interfaces";
import { Product } from "./product";
import { Rubik } from "./rubik";

export class RubikProduct {

    private _rubik: Rubik;
    private _product: Product;

    constructor({
            isDeform,facesNumber,
            name, price, stock, img, description
        }:RubikProductProps){
        this._rubik = new Rubik({facesNumber, isDeform});
        this._product = new Product({name,price,stock,img,description})
    }

    public get rubik(): Rubik {
        return this._rubik;
    }
    public set rubik(value: Rubik) {
        this._rubik = value;
    }
    public get product(): Product {
        return this._product;
    }
    public set product(value: Product) {
        this._product = value;
    }

}