import { Component, OnInit } from '@angular/core';
import { RubikService } from '../../services';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(
    public rubik: RubikService
    ) { }

  ngOnInit(): void {
  }

}
