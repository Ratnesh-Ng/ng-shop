import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Address } from '@app/modals/address';
import { getData } from '@core/utils/common.util';
import { UserService } from '@services/user.service';
import { CheckoutBase } from '../../base/checkout-base';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent extends CheckoutBase implements OnInit {

  public userService: UserService = inject(UserService);
  public addresses: WritableSignal<Address[]> = signal<Address[]>([]);
  public selectedAddress: WritableSignal<Address | null> = signal<Address | null>(null);

  override async ngOnInit() {
    super.ngOnInit();
    this.addresses.set(await getData(this.userService.queryAddress()));
  }

  //#region public
  
  public totalCartItems = computed(() => {
    this.calculateProductDetails();
    this.productStore.cart.data = this.cartItems();
    return this.cartItems().length;
  });
  
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

  //#region Private


  //#endregion Private

}
