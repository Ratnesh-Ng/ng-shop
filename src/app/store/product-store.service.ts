import { inject, Injectable } from '@angular/core';
import { Product } from '@app/modals/product';
import { Store } from './store';
import { fakeProducts } from '@app/faker/product.faker';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { BaseService } from '@core/base/base.service';
import { ProductService } from '@services/product.service';
import { getData, postData } from '@core/utils/common.util';

@Injectable({ providedIn: 'root' })

export class ProductStoreService extends BaseService {

  constructor() {
    super();
    this.products.refreshEvent.subscribe(() => {
      this.products.data = [...fakeProducts(this.productsLength), ...this.products.data ?? []]
    });
    // this.db.clearProductsFromDB();
  }

  private productsLength: number = 20;
  public productService = inject(ProductService)
  public products: Store<Product[] | null> = new Store(null, { refreshAfter: { minutes: 5 } });
  public wishListedProducts: Store<Product[] | null> = new Store(null);

  public queryProducts(): Observable<Product[] | null> {
    if ((this.products.data?.length ?? 0) < this.productsLength) {
      return this.productService.queryProducts().pipe(
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
    return this.productService.getProduct(UUID).pipe(
      map((x) => x[0]),
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
      return this.productService.queryWishlist().pipe(
        tap((a) => { this.wishListedProducts.data = a; }),
        catchError((e) => {
          return throwError(() => e)
        })
      );
    }
    return of(this.wishListedProducts.data)
  }

  public async addProductToWishlist(data: Product): Promise<boolean> {
    // Check if wishListedProducts data exists and is not empty
    if (this.wishListedProducts.data?.length) {
      // Check if the product is not already wishlisted
      if (this.wishListedProducts.data.every(a => a.id !== data.id)) {
        try {
          await postData(this.productService.addProductToWishlist(data));
          this.wishListedProducts.data.push(data);
          this.showAddedToWishlistToast(data);
          return true;
        } catch (error) {
          console.error("Error adding product to wishlist:", error);
          return false;
        }
      }
      this.showAddedToWishlistToast(data);
      // Return false if product is already in wishlist
      return false;
    } else {
      // If wishListedProducts data is empty or undefined, fetch it
      await getData(this.queryWishListedProducts());
      // Retry adding product to wishlist after fetching
      return this.addProductToWishlist(data);
    }
  }

  public async addProductToCart(data: Product): Promise<boolean> {
    return true;
  }

  public showAddedToWishlistToast(data: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Added to Wishlist!',
      detail: `You have successfully added ${data.name} to your wishlist.`,
      life: 2000
    })
  }

  public showAddedToCartToast(data: Product) {
    this.messageService.add({
        severity: 'success',
        summary: 'Product Added to Cart!',
        detail: `You have successfully added ${data.name} to your cart.`,
        life: 2000 // duration in milliseconds
    })
}

}
