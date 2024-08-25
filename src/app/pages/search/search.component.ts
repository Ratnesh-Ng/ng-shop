import { Component, inject, OnInit } from '@angular/core';
import { Search, QueryOptions, SortBy } from '@app/modals/search';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { formatEnumToArray } from '@core/utils/enum.util';
import { ProductStoreService } from '../../store/product-store.service';
import { getData } from '@core/utils/common.util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent extends SearchBaseComponent implements OnInit {

  productStoreService = inject(ProductStoreService)
  sortByOptions = formatEnumToArray(SortBy);
  filterOptions: QueryOptions = new QueryOptions();

  searchResult!: Search | null;

  override ngOnInit(): void {
    super.ngOnInit()
    this.getParams();
  }

  private getParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchProductByKeyword(params["rawQuery"])
    });
  }

  private async searchProductByKeyword(keyword: string) {
    getData(this.productStoreService.searchProducts(keyword)).then(a => {
      this.searchResult = a;
    });
  }

}
