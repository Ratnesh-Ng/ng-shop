import { Component } from '@angular/core';
import { fakeProducts } from '@app/faker/product.faker';
import { FilterOptions, SortBy } from '@app/modals/filter-options';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { formatEnumToArray } from '@core/utils/enum.util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent extends SearchBaseComponent {
  products = fakeProducts(20);
  sortByOptions = formatEnumToArray(SortBy);
  filterOptions: FilterOptions = new FilterOptions();

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
