import { Component, inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { ProductStoreService } from '@store/product-store.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent extends BaseComponent {
  private productStore: ProductStoreService = inject(ProductStoreService);
  public totalWishListedItem = 0;
  public products$ = this.productStore.queryWishListedProducts().pipe(
    tap((data) => {
      this.totalWishListedItem = data?.length ?? 0;
    })
  )
}
