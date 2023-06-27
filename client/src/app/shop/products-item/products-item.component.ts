import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private basketService: BasketService) { }

  ngOnInit() {

  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
}
