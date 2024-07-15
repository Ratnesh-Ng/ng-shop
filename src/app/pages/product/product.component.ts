import { Component } from '@angular/core';
import { fakeProduct } from '@app/faker/product.faker';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product = fakeProduct;

}
