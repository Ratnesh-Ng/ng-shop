import { Component, inject } from '@angular/core';
import { Order } from '@app/modals/order';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { ProductStoreService } from '@store/product-store.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent extends SearchBaseComponent {
    private productStore: ProductStoreService = inject(ProductStoreService);
    public orderDetails$: Observable<Order> = this.productStore.getOrderById(this.activatedRoute.snapshot.paramMap.get('id')!);

}
