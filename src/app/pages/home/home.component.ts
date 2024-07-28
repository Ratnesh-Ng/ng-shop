import { Component, inject } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { ProductCardEvent } from '@core/components/product-card/type';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent {

  private productStore: ProductStoreService = inject(ProductStoreService);
  public products$ = this.productStore.queryProducts()

  public async onEventCapture(event: ProductCardEvent): Promise<void> {
    if (event.eventType == 'addToWishlist') {
      await this.productStore.addProductToWishlist(event.data)
    }
  }
}
