import { Component, signal, WritableSignal } from '@angular/core';
import { generateFakeAddresses } from '@app/faker/address.faker';
import { Address } from '@app/modals/address';
import { CartProductDetails } from '@app/modals/product';
import { ProductBase } from '@shared/base/product.base';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent extends ProductBase {

  public productDetails: CartProductDetails = new CartProductDetails();
  public addresses: WritableSignal<Address[]> = signal<Address[]>(generateFakeAddresses(3));
  public selectedAddress: WritableSignal<Address | null> = signal<Address | null>(null);

  //#region public

  public navigateToPayment() {
    this.router.navigateByUrl(this.appRoutes.payment)
  }

  public onAddressSelect(item: Address) {
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
  ////#endregion public

}
