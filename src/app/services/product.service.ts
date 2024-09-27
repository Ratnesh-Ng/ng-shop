import { inject, Injectable } from '@angular/core';
import { generateFakeSearchData } from '@app/faker/search.faker';
import { Cart, Wishlist } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { Order } from '@app/modals/order';
import { Product } from '@app/modals/product';
import { ProductFilterValue, QueryOptions } from '@app/modals/search';
import { BaseService } from '@core/base/base.service';
import { of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
  public userService: UserService = inject(UserService);
  private userId = this.userService.loggedInUser?.id;

  public queryProducts() {
    return this.http.get<Product[]>(this.apiRoutes.products,{headers:this.skipAuthHeader});
  }

  public getProduct(uuid: string) {
    return this.http.get<Product[]>(this.apiRoutes.productByUUID(uuid),{headers:this.skipAuthHeader})
  }

  public queryWishlist() {
    return this.http.get<Product[]>(`${this.apiRoutes.wishlist}?userId=${this.userId}`);
  }

  public addProductToWishlist(data: Product) {
    const wProduct: Wishlist = { ...data, userId: this.userId };
    return this.http.post<Product>(this.apiRoutes.wishlist, wProduct);
  }

  public removeProductFromWishlist(id: string | number) {
    return this.http.delete<Product>(this.apiRoutes.wishlistByID(id));
  }

  public queryOffers() {
    return this.http.get<Offer[]>(this.apiRoutes.offers,{headers:this.skipAuthHeader});
  }

  public queryCart() {
    return this.http.get<Cart[]>(`${this.apiRoutes.cart}?userId=${this.userId}`);
  }

  public addProductToCart(data: Product) {
    const cProduct: Cart = { ...data, userId: this.userId };
    return this.http.post<Product>(this.apiRoutes.cart, cProduct);
  }

  public removeProductFromCart(id: string | number) {
    return this.http.delete<Product>(this.apiRoutes.cartByID(id));
  }

  public searchProduct(options: QueryOptions<ProductFilterValue>) {
    return of(generateFakeSearchData(options.fullText))
  }

  public placeOrder<T>(options: T) {
    return this.http.post<T>(this.apiRoutes.orders, options);
  }

  public queryOrders() {
    return this.http.get<Order[]>(`${this.apiRoutes.orders}?userId=${this.userId}`);
  }

  public getOrderById(id: string | number) {
    return this.http.get<Order>(this.apiRoutes.orderByID(id));
  }

}
