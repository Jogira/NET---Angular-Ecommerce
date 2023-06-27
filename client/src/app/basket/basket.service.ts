import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem } from '../shared/models/basket';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;

  private basketSource = new BehaviorSubject<IBasket>({} as IBasket);

  basket$ = this.basketSource.asObservable();

  constructor(private http: HttpClient) { }

  getBasket(id: string) {

    return this.http.get(this.baseUrl + 'basket?id=' + id)
      .pipe(
        map((basket: Object) => {
          this.basketSource.next(basket as IBasket);
          console.log(this.getCurrentBasketValue());
        })
      );
  }

  setBasket(basket: IBasket) {
    if (!basket.id) {
      basket.id = localStorage.getItem('basket_id') || uuidv4();
    }

    return this.http.post(this.baseUrl + 'basket', basket).subscribe((response: any) => {
      this.basketSource.next(response);
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }



  getCurrentBasketValue() {
    return this.basketSource.value;
  }


  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
    const basket = this.getCurrentBasketValue();
    const updatedBasket = Object.keys(basket).length === 0 ? this.createBasket() : basket;
    updatedBasket.items = this.addOrUpdateItem(updatedBasket.items, itemToAdd, quantity);
    this.setBasket(updatedBasket);
  }


  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    if (!items) {
      items = []; // Create an empty array if 'items' is undefined
    }

    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }

    return items;
  }



  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    };
  }
}
