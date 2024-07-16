import { Component, inject, OnInit } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';
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
