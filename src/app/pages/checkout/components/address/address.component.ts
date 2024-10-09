import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { Address, AddressCardEvent, AddressEditModalEvent } from '@app/modals/address';
import { getData, postData } from '@core/utils/http.util';
import { CheckoutBase } from '../../base/checkout-base';
import { scrollToTop } from '@core/utils/common.util';
import { Order } from '@app/modals/order';
import { createFakePayment } from '@app/faker/order.faker';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent extends CheckoutBase implements OnInit {

  public addresses: WritableSignal<Address[]> = signal<Address[]>([]);
  public selectedAddress: WritableSignal<Address | null> = signal<Address | null>(null);
  public addressToUpdate = signal<Address | null>(null);

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
    const isAddressSelected = this.selectedAddress();
    const hasCartItem = this.cartItems().length > 0;

    if (hasCartItem && isAddressSelected) {
      // const toSave: PlaceOrder = {
      //   addressId: this.selectedAddress()?.id,
      //   products: this.cartItems().map(a => { return { id: a.id, quantity: 1 }; }),//TODO replace with original quantity
      //   PaymentInfo: createFakePayment(),
      //   orderStatus: "Pending" //TODO replace it with enum
      // };
      //TODO:now delete products from the cart because order is placed
      //replace "Order" modal with "PlaceOrder" 
      this.calculateProductDetails()
      const orderDate = faker.date.past();
      const deliveryDate = faker.date.between({ from: orderDate, to: faker.date.future() });
      console.log(this.productDetails)
      const toSave: Order = {
        deliveryDate: deliveryDate,
        orderDate: orderDate,
        paymentInfo: { ...createFakePayment(), amount: this.productDetails.totalAmountToPay },
        status: "Processing",
        products: this.cartItems(),
        shippingInfo: this.selectedAddress()!,
      }
      postData<Order>(this.productStore.productService.placeOrder(toSave)).then(() => {
        this.router.navigateByUrl(this.appRoutes.payment)
      })
    } else {
      this.productStore.messageService.add({
        severity: 'error',
        detail: hasCartItem ? (isAddressSelected ? undefined : `Please select address`) : `Add some products`,
        life: 2000
      })
    }
  }

  public onEventCapture(event: AddressCardEvent) {
    if (event.eventType == 'remove') {
      const addressId = event.data.id;
      postData(this.userService.deleteAddress(addressId!)).then(() => {
        this.addresses.update((val) => val.filter(a => a.id != addressId))
      })
    } else if (event.eventType == 'onCheckToggle') {
      this.onAddressSelect(event.data);
    } else if (event.eventType == 'edit') {
      this.addressToUpdate.set(event.data);
      this.showAddressModal();
    }
  }


  public showAddressEditModal: boolean = false;
  public showAddressModal() {
    this.showAddressEditModal = true;
  }

  public async onAddressModalEventCapture(event: AddressEditModalEvent) {
    if (event.eventType == 'close') {
      this.showAddressEditModal = false;
    } else if (event.eventType == 'submit') {
      this.showAddressEditModal = false
      this.addresses.set(await getData(this.userService.queryAddress()));
    }
    this.addressToUpdate.set(null);
  }
  //#endregion public

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
