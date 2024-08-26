import { inject, Injectable } from '@angular/core';
import { Product, ProductFrom } from '@app/modals/product';
import { Store } from './store';
import { generateFakeProducts } from '@app/faker/product.faker';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { BaseService } from '@core/base/base.service';
import { ProductService } from '@services/product.service';
import { getData, postData } from '@core/utils/http.util';
import { Offer } from '@app/modals/offer';
import { Cart } from '@app/modals/cart';
import { Search } from '@app/modals/search';

@Injectable({ providedIn: 'root' })

export class ProductStoreService extends BaseService {

  constructor() {
    super();
    this.products.refreshEvent.subscribe(() => {
      this.products.data = [...generateFakeProducts(this.productsLength), ...this.products.data ?? []]
    });
    // this.db.clearProductsFromDB();
  }

  private productsLength: number = 20;
  public productService = inject(ProductService)
  public products: Store<Product[] | null> = new Store(null, { refreshAfter: { minutes: 5 } });
  public wishListedProducts: Store<Product[] | null> = new Store(null);
  public cart: Store<Cart[] | null> = new Store(null);
  public offers: Store<Offer[] | null> = new Store(null);
  public searchedProduct: Store<Search | null> = new Store(null);

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

  public queryProductByID(UUID: string, type: ProductFrom): Observable<Product> {
    let product;
    if (UUID) {
      switch (type) {
        case "cart": {
          product = this.cart.data?.find(a => a.uuid == UUID);
          break;
        }
        case "search": {
          product = this.searchedProduct.data?.items?.find(a => a.uuid == UUID);
          break;
        }
        case "wishlist": {
          product = this.wishListedProducts.data?.find(a => a.uuid == UUID)
          break;
        }
        default: {
          product = this.products.data?.find(a => a.uuid == UUID);
          break;
        }
      }
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
    if ((this.wishListedProducts.data?.length ?? -1) > -1) {
      // Check if the product is not already wishlisted
      if (this.wishListedProducts.data?.every(a => a.id !== data.id)) {
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

  public queryCart(): Observable<Cart[] | null> {
    if (!this.cart.data?.length) {
      return this.productService.queryCart().pipe(
        tap((a) => this.cart.data = a),
        catchError((e) => {
          return throwError(() => e)
        })
      );
    }
    return of(this.cart.data)
  }

  public async addProductToCart(data: Product): Promise<boolean> {
    // Check if cart data exists and is not empty
    if ((this.cart.data?.length ?? -1) > -1) {
      // Check if the product is not already in the cart
      if (this.cart.data?.every(a => a.id !== data.id)) {
        try {
          await postData(this.productService.addProductToCart(data));
          this.cart.data.push(data);
          this.showAddedToCartToast(data);
          return true;
        } catch (error) {
          console.error("Error adding product to cart:", error);
          return false;
        }
      }
      this.showAddedToCartToast(data);
      // Return false if product is already in cart
      return false;
    } else {
      // If cart data is empty or undefined, fetch it
      await getData(this.queryCart());
      // Retry adding product to cart after fetching
      return this.addProductToCart(data);
    }
  }

  private searchedProductMap = new Map<string, Search>();
  public searchProducts(keyword: string): Observable<Search | null> {
    const mapKey = keyword?.toLowerCase();
    if (this.searchedProductMap.has(mapKey)) {
      const data = this.searchedProductMap.get(mapKey);
      this.searchedProduct.data = data!;
      return of(data!);
    }

    return this.productService.searchProduct(keyword).pipe(
      tap((a) => {
        this.searchedProduct.data = a;
        this.searchedProductMap.set(mapKey, a);
      }),
      catchError((e) => {
        return throwError(() => e)
      })
    );
  }

  public queryOffers(): Observable<Offer[] | null> {
    if (!this.offers.data?.length) {
      return this.productService.queryOffers().pipe(
        tap((a) => {
          this.offers.data = a;
        }),
        catchError((e) => {
          return throwError(() => e)
        })
      );
    }
    return of(this.offers.data)
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
