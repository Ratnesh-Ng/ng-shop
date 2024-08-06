import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { Cart } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { getData, postData } from '@core/utils/common.util';
import { ProductBase } from '@shared/base/product.base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent extends ProductBase implements OnInit {

  public offers: Observable<Offer[] | null> = this.productStore.queryOffers();
  public cartItems: WritableSignal<Cart[]> = signal<Cart[]>([]);

  public VisibleOffers = 1;
  public isAllChecked: boolean = false;
  
  public totalSelectedItems = computed(() => {
    const length = this.cartItems().filter(a => a?.isSelected).length;
    if (!length) {
      this.isAllChecked = false;
    }
    this.productStore.cart.data = this.cartItems();
    return length;
  });

  async ngOnInit(): Promise<void> {
    this.cartItems.set(await getData(this.productStore.queryCart()) ?? []);
  }

  //#region Private

  private removeObjectsById(array1: Cart[], array2: Cart[]) {
    const idsToRemove = new Set(array2.map(item => item.id));
    return array1.filter(item => !idsToRemove.has(item.id));
  }

  ////#endregion Private

  //#region public

  public calculateCheckedLength(index: number, newValue: boolean) {

    this.cartItems()[index].isSelected = newValue;
    this.cartItems.update((a) => [...a])

    if (this.totalSelectedItems() != this.cartItems().length) {
      this.isAllChecked = false;
    } else {
      this.isAllChecked = true;
    }
  }

  public onSelectAll() {
    this.cartItems.update(a => a.map(b => { return { ...b, isSelected: this.isAllChecked }; }));
  }

  public async removeMultipleItemFromCart() {
    const selectedItems = this.cartItems().filter(a => a.isSelected);
    const deletePromises = selectedItems.map(a => {
      return postData(this.productStore.productService.removeProductFromCart(a.id))
    })
    await Promise.all(deletePromises);
    this.cartItems.update(() => (this.removeObjectsById(this.cartItems(), selectedItems) ?? []));
  }

  public removeItemFromCart(item: Cart) {
    postData(this.productStore.productService.removeProductFromCart(item.id)).then(() => {
      this.cartItems.update(a => a.filter(x => x.id != item.id));
    })
  }

  //#endregion public

}
