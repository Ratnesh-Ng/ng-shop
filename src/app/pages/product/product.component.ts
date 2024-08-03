import { Component, inject } from '@angular/core';
import { Product } from '@app/modals/product';
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

  public async addProductToWishlist(data: Product): Promise<void> {
    await this.productStore.addProductToWishlist(data)
  }

  public async addProductToCart(data: Product): Promise<void> {
    await this.productStore.addProductToCart(data)
  }
  
}
