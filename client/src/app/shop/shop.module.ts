import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsDetailsComponent } from './products-details/products-details.component';



@NgModule({
  declarations: [ShopComponent, ProductsItemComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
