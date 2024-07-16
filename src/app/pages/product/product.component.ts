import { Component, inject, OnInit } from '@angular/core';
import { createFakeProduct } from '@app/faker/product.faker';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent extends SearchBaseComponent {
  private productStore: ProductStoreService = inject(ProductStoreService);
  product$ = this.productStore.queryProductByID(this.activatedRoute.snapshot.paramMap.get('UUID') ?? '');


}
