import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shoping-car-page',
  templateUrl: './shoping-car-page.component.html',
  styleUrls: ['./shoping-car-page.component.scss']
})
export class ShopingCarPageComponent implements OnInit {

  constructor(
      public readonly cart: ShoppingCartService
    ) { }

  ngOnInit(): void {
  }

}
