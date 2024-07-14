import { Component } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products = fakeProducts(20);

  log(event: any) {
    console.log(event)
  }
}
