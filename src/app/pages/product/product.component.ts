import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductFrom } from '@app/modals/product';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { scrollToTop } from '@core/utils/common.util';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent extends SearchBaseComponent implements OnInit {
  private productStore: ProductStoreService = inject(ProductStoreService);
  product$ = this.productStore.queryProductByID(this.activatedRoute.snapshot.paramMap.get('UUID') ?? '', this.productFrom);

  ngOnInit(): void {
    scrollToTop();
  }

  public async addProductToWishlist(data: Product): Promise<void> {
    await this.productStore.addProductToWishlist(data)
  }

  public async addProductToCart(data: Product): Promise<void> {
    await this.productStore.addProductToCart(data)
  }

  private get productFrom(): ProductFrom {
    return (this.activatedRoute.snapshot.queryParamMap.get("type") as ProductFrom) ?? "other"
  }
}
