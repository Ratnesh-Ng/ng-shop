import { Component } from '@angular/core';
import { createFakeOrder } from '@app/faker/order.faker';
import { Order } from '@app/modals/order';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
    
    public orderDetails: Order = createFakeOrder();

}
