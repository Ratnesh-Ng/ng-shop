import { BaseComponent } from "@core/base/base.component";
import { ProductStoreService } from "@store/product-store.service";
import { inject } from "@angular/core";

export class ProductBase extends BaseComponent {

    protected productStore: ProductStoreService = inject(ProductStoreService);

}