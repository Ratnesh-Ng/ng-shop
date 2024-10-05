import { Injectable } from '@angular/core';
import { Address } from '@app/modals/address';
import { User } from '@app/modals/user';
import { BaseService } from '@core/base/base.service';
import { generateOTP } from '@core/utils/common.util';
import { Environment } from '@environment/environment.dev';
import { forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  private _loggedInUser?: User;

  public get loggedInUser(): User | null {
    if (this._loggedInUser) {
      return this._loggedInUser;
    }
    const base64 = localStorage.getItem(Environment.tokenKey);
    if (base64) {
      let user: unknown = atob(base64);
      user = JSON.parse(user as string);
      return user as User;
    }
    return null;
  }

  public set loggedInUser(user: User) {
    const userInfo = btoa(JSON.stringify(user));
    localStorage.setItem(Environment.tokenKey, userInfo)
    this._loggedInUser = user
  }
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
    return this.http.post<User>(this.apiRoutes.user, { mobile, createdAt: new Date() }, { headers: this.skipAuthHeader });
  }

  public updateUser(userDetails: Partial<User>): Observable<User> {
    return this.http.patch<User>(this.apiRoutes.userById(userDetails.id!), userDetails);
  }

  private getUser(mobile: string) {
    return this.http.get<User[]>(`${this.apiRoutes.user}?mobile=${mobile}`, { headers: this.skipAuthHeader });
  }

  public validateOtp(data: { enteredOtp: number | string, requiredOtp: number | string, mobile: string }) {
    // return this.http.post<number>(this.apiRoutes.validateOtp,data);
    if (data.enteredOtp == data.requiredOtp) {
      return this.getUser(data.mobile).pipe(
        map(a => a[0]),
        tap(user => {
          this.loggedInUser = user;
        }),
        switchMap(() => of(true))
      );
    }
    return of(false);
  }

  public validateMobileNumber(mobile: string): Observable<User[]> {
    const mobileRequest = this.http.get<User[]>(`${this.apiRoutes.user}?mobile=${mobile}`);
    const alternateMobileRequest = this.http.get<User[]>(`${this.apiRoutes.user}?alternateMobile=${mobile}`);
    return forkJoin({ mobile: mobileRequest, alternateMobile: alternateMobileRequest }).pipe(
      map(({ mobile, alternateMobile }) => [...mobile, ...alternateMobile.filter(a=>a.alternateMobile)])
    );
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
    return this.http.put<Address[]>(this.apiRoutes.addressByID(newAddress.id!), newAddress);
  }

  public addAddress(newAddress: Address) {
    return this.http.post<Address[]>(this.apiRoutes.address, {...newAddress,userId: this.loggedInUser?.id});
  }
  //#endregion Address
}
