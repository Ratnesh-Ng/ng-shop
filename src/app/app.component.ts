import { Component } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-shop';
  products = fakeProducts(20);

  log(event: any) {
    console.log(event)
  }
}
