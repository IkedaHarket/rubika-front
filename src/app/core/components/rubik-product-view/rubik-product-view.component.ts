import { Component, Input, OnInit } from '@angular/core';
import { RubikProduct } from '../../class';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-rubik-product-view',
  templateUrl: './rubik-product-view.component.html',
  styleUrls: ['./rubik-product-view.component.scss']
})
export class RubikProductViewComponent implements OnInit {

   @Input('rubikProduct') rubikProduct!: RubikProduct;

  constructor(
      public readonly cart: ShoppingCartService,
    ) { }

  ngOnInit(): void {
  }

}
