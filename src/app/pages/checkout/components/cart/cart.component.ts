import { Component } from '@angular/core';
import { Cart } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { ProductBase } from '@shared/base/product.base';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent extends ProductBase {

  public offers: Observable<Offer[] | null> = this.productStore.queryOffers();
  public cartItems: Observable<Cart[] | null> = this.productStore.queryCart().pipe(
    tap(i => {
      this.cartLength = i?.length ?? 0;
    })
  );

  public VisibleOffers = 1;
  public cartLength = 0;
  public selectedItem: Cart[] = [];

  public onItemCheck(item: Cart, index: number) {
    if (item.isSelected) {
      this.selectedItem.push(item);
    } else {
      this.selectedItem.splice(index, 1);
    }
  }
  
}
