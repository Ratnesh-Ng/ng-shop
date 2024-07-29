import { Component, inject } from '@angular/core';
import { ProductBase } from '@shared/base/product.base';
import { ProductCardEvent } from '@core/components/product-card/type';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends ProductBase {

  public products$ = this.productStore.queryProducts()

  public async onEventCapture(event: ProductCardEvent): Promise<void> {
    if (event.eventType == 'addToWishlist') {
      await this.productStore.addProductToWishlist(event.data)
    }
  }
  
}
