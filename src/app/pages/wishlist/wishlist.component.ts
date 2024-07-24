import { Component, inject } from '@angular/core';
import { Product } from '@app/modals/product';
import { BaseComponent } from '@core/base/base.component';
import { ProductCardEvent } from '@core/components/product-card/type';
import { ProductStoreService } from '@store/product-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent extends BaseComponent {
  private productStore: ProductStoreService = inject(ProductStoreService);
  public totalWishListedItem = 0;
  public products$ = this.queryWishListedProducts();

  private queryWishListedProducts(): Observable<Product[] | null> {
    return this.productStore.queryWishListedProducts();
  }

  public onEventCapture(event: ProductCardEvent, index: number): void {
    if (event.eventType == 'removeFromWishlist') {
      this.productStore.wishListedProducts.data?.splice(index, 1);
      // this.products$ = this.queryWishListedProducts()
    }
  }
}
