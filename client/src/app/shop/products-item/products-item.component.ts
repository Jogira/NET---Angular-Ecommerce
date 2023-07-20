import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private basketService: BasketService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
    this.toastr.success('Added to basket.');
  }
}
