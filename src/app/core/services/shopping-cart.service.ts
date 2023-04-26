import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ShoppingCart, ShoppingProduct } from '../interfaces';
import { RubikProduct } from '../class';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _shoppingCart = new BehaviorSubject<ShoppingCart>({ products:[] })
  public shoppingCart$ = this._shoppingCart.asObservable();

  constructor(
      private readonly alert: AlertService,
    ) { 
      this.initLoad()
    }

  initLoad(){
    if(this.readLocalStorage().products.length <= 0) return
    this._shoppingCart.next({products: this.readLocalStorage().products.map(({units,rubikProduct}:any)=> ({
      units,
      rubikProduct: new RubikProduct({
        facesNumber: rubikProduct._rubik._facesNumber,
        isDeform: rubikProduct._rubik._isDeform,
        name:rubikProduct._product._name,
        img: rubikProduct._product._img,
        price: rubikProduct._product._price,
        stock: rubikProduct._product._stock,
        description: rubikProduct._product._description
      })
    } as ShoppingProduct)) })
  }

  addRubikProduct(rubikProduct:RubikProduct){
    const existProduct = this.findShoppingProduct(rubikProduct.product.id);
    if(existProduct){

      if( !this.availableStock(rubikProduct.product.id) ) {
        this.alert.displayToast({icon:'error', title:`Stock no disponible :c`})
        return
      }

      this._shoppingCart.next({ products: 
        this._shoppingCart.value.products.map((p)=>(
          (p.rubikProduct.product.id === existProduct.rubikProduct.product.id) 
          ? { ...p, units : p.units + 1 } as ShoppingProduct
          : p 
          ))
      })
  
      this.alert.displayToast({icon:'success', title:`${existProduct.units + 1} ${ rubikProduct.product.name } agregados`})

    }else{

      this._shoppingCart.next({ products: [
        ...this._shoppingCart.value.products,
        { units: 1, rubikProduct}
      ]})

      this.alert.displayToast({icon:'success', title:`${ rubikProduct.product.name } agregado`})
    }
    this.saveLocalStorage()
  }

  removeRubikProduct(rubikProduct:RubikProduct){
    const existProduct = this.findShoppingProduct(rubikProduct.product.id);
    if(!existProduct) return

    if(existProduct.units === 1) {
      this._shoppingCart.next({ products: 
        this._shoppingCart.value.products.filter( p => (
            ( p.rubikProduct.product.id !== existProduct.rubikProduct.product.id)
          ) )
      })
      this.alert.displayToast({icon:'success', title:`${ rubikProduct.product.name } quitado`})
      this.saveLocalStorage()
      return 
    }

    this._shoppingCart.next({ products: 
      this._shoppingCart.value.products.map((p)=>(
        (p.rubikProduct.product.id === existProduct.rubikProduct.product.id) 
        ? { ...p, units : p.units - 1 } as ShoppingProduct
        : p 
        ))
    })
    this.alert.displayToast({icon:'success', title:`${existProduct.units - 1} ${ rubikProduct.product.name } quitado`})
    this.saveLocalStorage()
  }

  availableStock( idProduct:string ){
    const existProduct = this.findShoppingProduct(idProduct);
    if(!existProduct) return
    return ( existProduct.units < existProduct.rubikProduct.product.stock) 
  }

  findShoppingProduct(idProduct: string): ShoppingProduct{
    return this._shoppingCart.value.products.filter( (p) => p.rubikProduct.product.id === idProduct )[0] || null
  }

  calcFullPurchase():Observable<number>{
      return this.shoppingCart$.pipe( 
          map( (s: ShoppingCart)  => s.products.reduce( (a,p) => a + p.units * p.rubikProduct.product.price, 0))
        )
  }

  saveLocalStorage(){
    localStorage.setItem('shoppingCart', JSON.stringify(this._shoppingCart.value))
  }

  readLocalStorage():ShoppingCart{
    return JSON.parse(localStorage.getItem('shoppingCart') || 'false' ) || { products:[] }
  }

}
