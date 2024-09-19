import { Component } from '@angular/core';
import { generateFakeOrders } from '@app/faker/order.faker';
import { Order } from '@app/modals/order';
import { scrollToTop } from '@core/utils/common.util';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  orders: Order[] = generateFakeOrders(3);

  constructor() {
    scrollToTop();
  }

  selectedOrder: Order | null = null;

  selectOrder(order: Order) {
    this.selectedOrder = order;
  }
}
