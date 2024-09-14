import { Component } from '@angular/core';
import { generateFakeProducts } from '@app/faker/product.faker';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
    public products = generateFakeProducts(2);
   
}
