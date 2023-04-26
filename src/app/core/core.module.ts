import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CurtainLayoutComponent } from './layouts/curtain-layout/curtain-layout.component';
import { CurtainComponent } from './components/curtain/curtain.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RubikProductViewComponent } from './components/rubik-product-view/rubik-product-view.component';
import { MaterialModule } from '../material/material.module';
import { ShopingCarPageComponent } from './pages/shoping-car-page/shoping-car-page.component';
import { RouterModule } from '@angular/router';
import { ProductCartComponent } from './components/product-cart/product-cart.component';



@NgModule({
  declarations: [
    CurtainLayoutComponent,
    CurtainComponent,
    ProductsPageComponent,
    RubikProductViewComponent,
    ShopingCarPageComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    RouterModule,
  ]
})
export class CoreModule { }
