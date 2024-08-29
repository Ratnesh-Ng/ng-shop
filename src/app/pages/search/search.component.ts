import { Component, inject, OnInit } from '@angular/core';
import { Search, QueryOptions, SortBy, ProductFilterValue } from '@app/modals/search';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { formatEnumToArray } from '@core/utils/enum.util';
import { ProductStoreService } from '../../store/product-store.service';
import { getData } from '@core/utils/http.util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent extends SearchBaseComponent implements OnInit {

  productStoreService = inject(ProductStoreService)
  sortByOptions = formatEnumToArray(SortBy);
  queryOptions: QueryOptions<ProductFilterValue> = new QueryOptions<ProductFilterValue>({ filters: new ProductFilterValue() });

  searchResult!: Search | null;
  totalPages = 3;
  
  ngOnInit(): void {
    console.log(this.queryOptions)
    this.getParams();
  }

  private getParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.queryOptions.fullText = params["rawQuery"];
      this.searchProductByKeyword()
    });
  }

  isLoading = false;
  private async searchProductByKeyword() {
    this.isLoading = true;
    getData(this.productStoreService.searchProducts(this.queryOptions), { busy: true }).then(a => {
      this.searchResult = a;
      this.queryOptions.page++;
      this.isLoading = false;
    });
  }

  loadMoreItems() {
    if (this.queryOptions.page <= this.totalPages) {
      this.isLoading = true;
      this.queryOptions.page++;
      getData(this.productStoreService.searchProducts(this.queryOptions), { busy: true }).then(a => {
        this.searchResult?.items.push(...a?.items ?? []);
        this.isLoading = false;
      });
    }
  }
}
