/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateFakeAddresses } from '@app/faker/address.faker';
import { generateFakeOffer } from '@app/faker/offer.faker';
import { fakeProducts } from '@app/faker/product.faker';
import { Product } from '@app/modals/product';
import { ApiRoutes } from '@shared/const/api.routes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  protected apiRoutes = ApiRoutes;

  constructor(private http: HttpClient) {

    this.allDataDeleted.subscribe((a) => {
      this.loadDateInDB(a);
    })

    // this.clearDataFromDB({ data: generateFakeOffer(), getUrl: this.apiRoutes.offers, getOneUrl: this.apiRoutes.offerByID });
    // this.clearDataFromDB({ data: fakeProducts(20), getUrl: this.apiRoutes.products, getOneUrl: this.apiRoutes.productByID });
    // this.clearDataFromDB({ data: [], getUrl: this.apiRoutes.wishlist, getOneUrl: this.apiRoutes.wishlistByID });
    // this.clearDataFromDB({ data: [], getUrl: this.apiRoutes.cart, getOneUrl: this.apiRoutes.cartByID });
    // this.clearDataFromDB({ data: generateFakeAddresses(3), getUrl: this.apiRoutes.address, getOneUrl: this.apiRoutes.addressByID });
  }


  public allDataDeleted: Subject<{ getUrl: string, data: any[] }> = new Subject<{ getUrl: string, data: any[] }>();
  public clearDataFromDB(options: { getUrl: string, getOneUrl: (ID: string | number) => string, data: any[] }) {
    let counter = 0;
    this.http.get<Product[]>(options.getUrl).subscribe({
      next: (value) => {
        if (!value.length) {
          this.loadDateInDB({ getUrl: options.getUrl, data: options.data });
          return;
        }
        value.forEach(a => {
          this.http.delete(options.getOneUrl(a.id)).subscribe(() => {
            counter++;
            if (counter == value.length) {
              this.allDataDeleted.next({ getUrl: options.getUrl, data: options.data });
            }
          });
        });
      }
    })
  }

  public loadDateInDB(options: { getUrl: string, data: any[] }) {
    options.data.forEach(data => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...restValues } = data;
      this.http.post(options.getUrl, restValues).subscribe();
    })
  }
}
