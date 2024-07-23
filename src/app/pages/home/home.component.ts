import { Component, inject } from '@angular/core';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private productStore: ProductStoreService = inject(ProductStoreService);
  public products$ = this.productStore.queryProducts()

  log(event: any) {
    // console.log(event)
  }
}
