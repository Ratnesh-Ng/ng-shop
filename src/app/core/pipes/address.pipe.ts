import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@app/modals/address';

@Pipe({
  name: 'address',
  pure: true
})
export class AddressPipe implements PipeTransform {

  transform(value: Address): string {

    if (value) {
      return `${value.address} ${value.locality} ${value.city}, ${value.state} ${value.pinCode}`;
    }
    return '';

  }

}
