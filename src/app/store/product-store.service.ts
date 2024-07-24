import { inject, Injectable } from '@angular/core';
import { Product } from '@app/modals/product';
import { Store } from './store';
import { createFakeProduct, fakeProducts } from '@app/faker/product.faker';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ProductStoreService {

  constructor() {
    this.products.refreshEvent.subscribe(() => {
      this.products.data = [...fakeProducts(this.productsLength), ...this.products.data ?? []]
    });
  }

  private productsLength: number = 20;
  private http: HttpClient = inject(HttpClient);
  public products: Store<Product[] | null> = new Store(null, { refreshAfter: { minutes: 5 } });
  public wishListedProducts: Store<Product[] | null> = new Store(null);

  public queryProducts(): Observable<Product[] | null> {
    if ((this.products.data?.length ?? 0) < this.productsLength) {
      return this.http.get<Product[]>('../../../assets/dummy.json').pipe(
        map(() => fakeProducts(this.productsLength)),
        tap((a) => {
          this.products.data = a;
        }),
        catchError((e) => {
          return throwError(() => e)
        })
      );
    }
    return of(this.products.data)
  }

  public queryProductByID(UUID: string): Observable<Product> {
    let product;
    if (UUID) {
      product = this.wishListedProducts.data?.find(a => a.uuid == UUID) || this.products.data?.find(a => a.uuid == UUID);
    }
    if (product) {
      return of(product);
    }
    return this.http.get<Product>('../../../assets/dummy.json').pipe(
      map(() => createFakeProduct()),
      tap((a) => {
        this.products.data?.push(a);
      }),
      catchError((e) => {
        return throwError(() => e)
      })
    )
  }

  public queryWishListedProducts(): Observable<Product[] | null> {
    if ((this.wishListedProducts.data?.length ?? 0) < 1) {
      return this.http.get<Product[]>('../../../assets/dummy.json').pipe(
        map(() => fakeProducts(7)),
        tap((a) => { this.wishListedProducts.data = a; }),
        catchError((e) => {
          return throwError(() => e)
        })
      );
    }
    return of(this.wishListedProducts.data)
  }
}
