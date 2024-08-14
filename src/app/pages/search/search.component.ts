import { Component } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';
import { SearchBaseComponent } from '@core/base/search-base.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent extends SearchBaseComponent {
  products = fakeProducts(20);
  constructor() {
    super();
    this.getParams();
  }

  private getParams() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
    });
  }
  
}
