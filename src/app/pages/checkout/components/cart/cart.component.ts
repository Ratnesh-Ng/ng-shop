import { Component, OnInit } from '@angular/core';
import { Cart } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { getData, postData } from '@core/utils/common.util';
import { ProductBase } from '@shared/base/product.base';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent extends ProductBase implements OnInit {

  public offers: Observable<Offer[] | null> = this.productStore.queryOffers();
  public cartItems: Cart[] = [];

  public VisibleOffers = 1;
  public totalSelectedItems = 0;
  public isAllChecked: boolean = false;

  async ngOnInit(): Promise<void> {
    this.cartItems = await getData(this.getCartItems()) ?? [];
  }

  //#region Private

  private getCartItems(): Observable<Cart[] | null> {
    return this.productStore.queryCart().pipe(
      tap(i => {
        this.totalSelectedItems = i?.filter(x => x.isSelected)?.length ?? 0;
      })
    );
  }

  private removeObjectsById(array1: Cart[], array2: Cart[]) {
    const idsToRemove = new Set(array2.map(item => item.id));
    return array1.filter(item => !idsToRemove.has(item.id));
  }

  ////#endregion Private

  //#region public

  public calculateCheckedLength() {
    this.totalSelectedItems = this.cartItems?.filter(x => x.isSelected)?.length ?? 0;
  }

  public onSelectAll() {
    this.cartItems.forEach(a => a.isSelected = this.isAllChecked);
  }

  public async removeMultipleItemFromCart() {
    const selectedItems = this.cartItems.filter(a => a.isSelected);
    const deletePromises = selectedItems.map(a => {
      return postData(this.productStore.productService.removeProductFromCart(a.id))
    })
    await Promise.all(deletePromises);
    this.productStore.cart.data = this.removeObjectsById((this.productStore.cart.data ?? []), selectedItems);
    this.cartItems = this.productStore.cart.data ?? [];
  }

  public removeItemFromCart(item: Cart, index: number) {
    postData(this.productStore.productService.removeProductFromCart(item.id)).then(() => {
      // this.productStore.cart.data?.splice(index, 1);
      this.cartItems.splice(index, 1);
      this.calculateCheckedLength()
    })
  }

  //#endregion public

}
