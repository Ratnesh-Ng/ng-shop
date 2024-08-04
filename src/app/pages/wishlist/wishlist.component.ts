import { Component } from '@angular/core';
import { Product } from '@app/modals/product';
import { ProductBase } from '@shared/base/product.base';
import { ProductCardEvent } from '@core/components/product-card/type';
import { postData } from '@core/utils/common.util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})

export class WishlistComponent extends ProductBase {

  public totalWishListedItem = 0;
  public products$ = this.queryWishListedProducts();

  private queryWishListedProducts(): Observable<Product[] | null> {
    return this.productStore.queryWishListedProducts();
  }

  public onEventCapture(event: ProductCardEvent, index: number): void {
    if (event.eventType == 'removeFromWishlist') {
      postData(this.productStore.productService.removeProductFromWishlist(event.data.id)).then(() => {
        this.productStore.wishListedProducts.data?.splice(index, 1);
        this.products$ = this.queryWishListedProducts()
      })
    } else if (event.eventType == 'moveToBag') {
      this.productStore.addProductToCart(event.data);
    }
  }
}
