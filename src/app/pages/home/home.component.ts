import { Component, inject } from '@angular/core';
import { ProductCardEvent } from '@core/components/product-card/type';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private productStore: ProductStoreService = inject(ProductStoreService);
  public products$ = this.productStore.queryProducts()

  public onEventCapture(event: ProductCardEvent): void {
    if (event.eventType == 'addToWishlist') {
      if(this.productStore.wishListedProducts.data?.every(a=>a.uuid != event.data.uuid)){
        this.productStore.wishListedProducts.data?.push(event.data);
      }
    }
  }
}
