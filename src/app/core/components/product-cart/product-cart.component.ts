import { Component, Input, OnInit } from '@angular/core';
import { ShoppingProduct } from '../../interfaces';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  @Input('product') product!: ShoppingProduct;

  constructor(
      public cart : ShoppingCartService
    ) { }

  ngOnInit(): void {
  }
  
  total():number{
    return this.product.rubikProduct.product.price * this.product.units;
  }

}
