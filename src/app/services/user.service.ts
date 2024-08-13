import { Injectable } from '@angular/core';
import { Address } from '@app/modals/address';
import { BaseService } from '@core/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  public queryAddress() {
    return this.http.get<Address[]>(this.apiRoutes.address);
  }

  public deleteAddress(id: string | number) {
    return this.http.delete<Address[]>(this.apiRoutes.addressByID(id));
  }

  public updateAddress(newAddress: Address) {
    return this.http.put<Address[]>(this.apiRoutes.addressByID(newAddress.id), newAddress);
  }

  public addAddress(newAddress: Address) {
    return this.http.post<Address[]>(this.apiRoutes.address, newAddress);
  }

}
