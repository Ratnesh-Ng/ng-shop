import { Injectable } from '@angular/core';
import { Address } from '@app/modals/address';
import { User } from '@app/modals/user';
import { BaseService } from '@core/base/base.service';
import { generateOTP } from '@core/utils/common.util';
import { Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  public loggedInUser?: User;
  //#region Auth

  public getOtp(mobile: string): Observable<string> {
    return this.getUser(mobile).pipe(
      switchMap(users => {
        if (users.length) {
          return of(generateOTP()); // If user exists, generate OTP
        } else {
          return this.registerUser(mobile).pipe(
            switchMap(() => of(generateOTP())) // Register user and then generate OTP
          );
        }
      })
    );
  }

  public registerUser(mobile: string): Observable<User> {
    return this.http.post<User>(this.apiRoutes.user, { mobile });
  }

  private getUser(mobile: string) {
    return this.http.get<User[]>(`${this.apiRoutes.user}?mobile=${mobile}`);
  }

  public validateOtp(data: { enteredOtp: number | string, requiredOtp: number | string, mobile: string }) {
    // return this.http.post<number>(this.apiRoutes.validateOtp,data);
    if (data.enteredOtp == data.requiredOtp) {
      return this.getUser(data.mobile).pipe(
        tap(user => this.loggedInUser = user[0]),
        switchMap(() => of(true))
      );
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
