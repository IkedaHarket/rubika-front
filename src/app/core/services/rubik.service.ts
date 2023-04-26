import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RubikProduct } from '../class';
import rubikProducts from './rubik-data';
import { RubikProductProps } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RubikService {

  private _rubikProducts = new BehaviorSubject<RubikProduct[]>(rubikProducts)
  public rubikProducts$ = this._rubikProducts.asObservable();

  constructor() {
    this.initLoad();
  }

  private initLoad(){
    if(!localStorage.getItem('rubikProducts')){
      localStorage.setItem('rubikProducts',JSON.stringify(rubikProducts))
      return
    }
    const data = JSON.parse(localStorage.getItem('rubikProducts')!) 
    this._rubikProducts.next(data.map( ({_product,_rubik}:any) =>  {
      return new RubikProduct({
        facesNumber: _rubik._facesNumber,
        isDeform: _rubik._isDeform,
        name:_product._name,
        img: _product._img,
        price: _product._price,
        stock: _product._stock,
        description: _product._description
      } as RubikProductProps)
    }))
  }

}
