import { Component } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private productStoreService: ProductStoreService) {
    this.productStoreService.products.refreshEvent.subscribe(()=>{
      console.log('refresh products data here')
    })
  }

  title = 'ng-shop';
  products = fakeProducts(20);

  log(event: any) {
    console.log(event)
  }
}
