import { Component, computed, inject, OnInit } from '@angular/core';
import { Cart } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { postData } from '@core/utils/common.util';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { CheckoutBase } from '../../base/checkout-base';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent extends CheckoutBase implements OnInit {

  private confirmationService: ConfirmationService = inject(ConfirmationService)
  public offers: Observable<Offer[] | null> = this.productStore.queryOffers();
  public VisibleOffers = 1;
  public isAllChecked: boolean = false;

  public totalSelectedItems = computed(() => {
    const length = this.cartItems().filter(a => a?.isSelected).length;
    if (!length) {
      this.isAllChecked = false;
    }
    this.calculateProductDetails();
    this.productStore.cart.data = this.cartItems();
    return length;
  });

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

  public moveToWishlist() {
    if (this.totalSelectedItems()) {
      this.confirmationService.confirm({
        header: `Move ${this.totalSelectedItems()} item to wishlist`,
        message: `Are you sure you want to move ${this.totalSelectedItems()} item from bag.`,
        acceptLabel: 'MOVE TO WISHLIST',
        rejectLabel: 'CANCEL',
        acceptIcon: "none",
        rejectIcon: "none",
        acceptButtonStyleClass: 'p-2 ml-12 text-[11px]',
        rejectButtonStyleClass: 'p-2 text-[11px]',
        accept: async () => {
          const selectedItems = this.cartItems().filter(a => a.isSelected);
          const savePromise = selectedItems.map(a => {
            // TODO: Remove this once the backend supports moving products from the cart to the wishlist directly.
            // This involves removing the product from the cart and adding it to the wishlist.
            this.productStore.productService.removeProductFromCart(a.id).subscribe();
            return this.productStore.addProductToWishlist(a)
          })
          await Promise.all(savePromise);
          this.cartItems.update(() => (this.removeObjectsById(this.cartItems(), selectedItems) ?? []));
        }
      })
    }
  }

  public navigateToAddress() {
    this.router.navigateByUrl(this.appRoutes.address);
  }
  //#endregion public

}
