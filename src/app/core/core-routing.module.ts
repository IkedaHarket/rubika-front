import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ShopingCarPageComponent } from './pages/shoping-car-page/shoping-car-page.component';
import { CurtainLayoutComponent } from './layouts/curtain-layout/curtain-layout.component';

const routes: Routes = [
    { 
        path:'' ,
        component: CurtainLayoutComponent,
        children:[
            {
                path:'rubiks',
                component: ProductsPageComponent
            },{
                path:'shopping-cart',
                component: ShopingCarPageComponent
            },{
                path:'**',
                redirectTo:'rubiks'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }