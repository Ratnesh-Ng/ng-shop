import { Injectable } from '@angular/core';
import { generateFakeSearchData } from '@app/faker/search.faker';
import { Cart } from '@app/modals/cart';
import { Offer } from '@app/modals/offer';
import { Order } from '@app/modals/order';
import { Product } from '@app/modals/product';
import { ProductFilterValue, QueryOptions } from '@app/modals/search';
import { BaseService } from '@core/base/base.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  public queryProducts() {
    return this.http.get<Product[]>(this.apiRoutes.products);
  }

  public getProduct(uuid: string) {
    return this.http.get<Product[]>(this.apiRoutes.productByUUID(uuid))
  }

  public queryWishlist() {
    return this.http.get<Product[]>(this.apiRoutes.wishlist);
  }

  public addProductToWishlist(data: Product) {
    return this.http.post<Product>(this.apiRoutes.wishlist, data);
  }

  public removeProductFromWishlist(id: string | number) {
    return this.http.delete<Product>(this.apiRoutes.wishlistByID(id));
  }

  public queryOffers() {
    return this.http.get<Offer[]>(this.apiRoutes.offers);
  }

  public queryCart() {
    return this.http.get<Cart[]>(this.apiRoutes.cart);
  }

  public addProductToCart(data: Product) {
    return this.http.post<Product>(this.apiRoutes.cart, data);
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
    return this.http.get<Order[]>(this.apiRoutes.orders);
  }

  public getOrderById(id: string | number) {
    return this.http.get<Order>(this.apiRoutes.orderByID(id));
  }

}
