import { Component } from '@angular/core';
import { Order } from '@app/modals/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders: Order[] = [
    {
      orderId: '12345',
      placedOn: 'Aug 30, 2024',
      deliveredOn: 'Sep 05, 2024',
      totalAmount: '$160.00',
      products: [
        { name: 'Product A', price: '$50.00' },
        { name: 'Product B', price: '$60.00' },
        { name: 'Product C', price: '$50.00' },
      ],
    },
    {
      orderId: '12346',
      placedOn: 'Sep 02, 2024',
      deliveredOn: 'Sep 08, 2024',
      totalAmount: '$90.00',
      products: [
        { name: 'Product X', price: '$30.00' },
        { name: 'Product Y', price: '$60.00' },
      ],
    },
    // More orders...
  ];

  selectedOrder: Order | null = null;

  selectOrder(order: Order) {
    this.selectedOrder = order;
  }
}
