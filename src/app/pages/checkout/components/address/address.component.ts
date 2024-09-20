import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Address, AddressCardEvent } from '@app/modals/address';
import { getData, postData } from '@core/utils/http.util';
import { UserService } from '@services/user.service';
import { CheckoutBase } from '../../base/checkout-base';
import { scrollToTop } from '@core/utils/common.util';
import { PlaceOrder } from '@app/modals/order';
import { createFakePayment } from '@app/faker/order.faker';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent extends CheckoutBase implements OnInit {

  public userService: UserService = inject(UserService);
  public addresses: WritableSignal<Address[]> = signal<Address[]>([]);
  public selectedAddress: WritableSignal<Address | null> = signal<Address | null>(null);

  async ngOnInit() {
    scrollToTop()
    this.addresses.set(await getData(this.userService.queryAddress()));
  }

  //#region public

  public totalCartItems = computed(() => {
    this.calculateProductDetails();
    this.productStore.cart.data = this.cartItems();
    return this.cartItems().length;
  });

  public navigateToPayment() {
    if (this.selectedAddress()) {
      const toSave: PlaceOrder = {
        addressId: this.selectedAddress()?.id,
        productIds: this.cartItems().map(a => a.id),
        PaymentInfo: createFakePayment()
      };
      //TODO:now delete products from the cart because order is placed
      postData(this.productStore.productService.placeOrder(toSave)).then(() => {
        // console.log(a)
        this.router.navigateByUrl(this.appRoutes.payment)
      })
    } else {
      this.productStore.messageService.add({
        severity: 'error',
        detail: `Please select address`,
        life: 2000
      })
    }
  }

  public onEventCapture(event: AddressCardEvent) {
    if (event.eventType == 'remove') {
      // remove address
    } else if (event.eventType == 'onCheckToggle') {
      this.onAddressSelect(event.data);
    }
  }
  ////#endregion public

  //#region Private

  private onAddressSelect(item: Address) {
    this.addresses.update((a) => a.map(element => {
      if (element.id != item.id) {
        element.isDefaultAddress = false;
      } else {
        element.isDefaultAddress = true;
      }
      return element
    }));
    this.selectedAddress.set({ ...item, isDefaultAddress: true });
  }

  //#endregion Private

}
