import { v4 as uuidv4 } from 'uuid';
import { ProductProps } from '../interfaces';

export class Product {
    
    private _id: string;
    private _name: string
    private _price: number
    private _stock: number
    private _img: string
    private _description?: string

    constructor({ name, price, stock, img, description }: ProductProps){
            this._id = uuidv4();
            this._name = name
            this._price = price
            this._stock = stock
            this._img = img
            this._description = description
        }

        public get description(): string {
            return this._description || '';
        }
        public set description(value: string) {
            this._description = value;
        }
        public get img(): string {
            return this._img;
        }
        public set img(value: string) {
            this._img = value;
        }
        public get stock(): number {
            return this._stock;
        }
        public set stock(value: number) {
            this._stock = value;
        }
        public get price(): number {
            return this._price;
        }
        public set price(value: number) {
            this._price = value;
        }
        public get name(): string {
            return this._name;
        }
        public set name(value: string) {
            this._name = value;
        }
        public get id(): string {
            return this._id;
        }
        public set id(value: string) {
            this._id = value;
        }
}