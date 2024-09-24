import { Injectable } from '@angular/core';
import { Address } from '@app/modals/address';
import { BaseService } from '@core/base/base.service';
import { generateOTP } from '@core/utils/common.util';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  //#region Auth

  public getOtp() {
    // return this.http.get<number>(this.apiRoutes.getOtp);
    return of(generateOTP());
  }

  public validateOtp(data: { enteredOtp: number | string, requiredOtp: number | string }) {
    // return this.http.post<number>(this.apiRoutes.validateOtp,data);
    if (data.enteredOtp == data.requiredOtp) {
      return of(true);
    }
    return of(false);
  }

  //#endregion Auth

  //#region Address
  public queryAddress() {
    return this.http.get<Address[]>(this.apiRoutes.address);
  }

  public getAddressById(id: number | string) {
    return this.http.get<Address[]>(this.apiRoutes.addressByID(id));
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
  //#endregion Address
}
