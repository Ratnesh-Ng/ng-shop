import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Cart } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { CartProductDetails } from '@app/modals/product';
import { getData, postData } from '@core/utils/common.util';
import { ProductBase } from '@shared/base/product.base';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent extends ProductBase implements OnInit {
  private confirmationService: ConfirmationService = inject(ConfirmationService)
  public offers: Observable<Offer[] | null> = this.productStore.queryOffers();
  public cartItems: WritableSignal<Cart[]> = signal<Cart[]>([]);

  public VisibleOffers = 1;
  public isAllChecked: boolean = false;
  public productDetails: CartProductDetails = new CartProductDetails();

  public totalSelectedItems = computed(() => {
    const length = this.cartItems().filter(a => a?.isSelected).length;
    if (!length) {
      this.isAllChecked = false;
    }
    this.calculateProductDetails();
    this.productStore.cart.data = this.cartItems();
    return length;
  });

  override async ngOnInit(): Promise<void> {
    super.ngOnInit()
    this.cartItems.set(await getData(this.productStore.queryCart()) ?? []);
  }

  //#region Private

  private removeObjectsById(array1: Cart[], array2: Cart[]) {
    const idsToRemove = new Set(array2.map(item => item.id));
    return array1.filter(item => !idsToRemove.has(item.id));
  }

  private calculateProductDetails() {
    this.productDetails.totalMrp = this.cartItems().reduce((acc, val) => acc + val.actualPrice, 0);
    this.productDetails.discountOnMrp = this.cartItems().reduce((acc, val) => (acc + (val.actualPrice - val.sellingPrice)), 0);
    this.productDetails.totalAmountToPay = this.productDetails.totalMrp - this.productDetails.discountOnMrp;
    if ((this.productDetails.totalAmountToPay != 0) && (this.productDetails.totalAmountToPay < 500)) {
      this.productDetails.shippingFee = 40;
    } else {
      this.productDetails.shippingFee = 0;
    }
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
