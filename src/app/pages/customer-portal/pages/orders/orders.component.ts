import { Component, inject, OnInit } from '@angular/core';
import { scrollToTop } from '@core/utils/common.util';
import { ProductStoreService } from '@store/product-store.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  private productStore: ProductStoreService = inject(ProductStoreService);
  public orders = this.productStore.queryOrders()

  ngOnInit(): void {
    scrollToTop();
  }

}
