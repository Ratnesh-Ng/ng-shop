import { Component, inject, OnInit } from '@angular/core';
import { Search, QueryOptions, SortBy, FilterValue } from '@app/modals/search';
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
  filterOptions: QueryOptions = new QueryOptions();
  filterValue: FilterValue = new FilterValue();

  searchResult!: Search | null;
  searchedKeyword: string = "";
  totalPages = 5;
  currentPage = 0;
  ngOnInit(): void {
    this.getParams();
  }

  private getParams() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchedKeyword = params["rawQuery"];
      this.searchProductByKeyword()
    });
  }

  isLoading = false;
  private async searchProductByKeyword() {
    this.isLoading = true;
    getData(this.productStoreService.searchProducts(this.searchedKeyword), { busy: true }).then(a => {
      this.searchResult = a;
      this.currentPage++;
      this.isLoading = false;
    });
  }

  loadMoreItems() {
    if (this.currentPage < this.totalPages) {
      this.isLoading = true;
      this.currentPage++;
      getData(this.productStoreService.searchProducts(this.searchedKeyword), { busy: true }).then(a => {
        this.searchResult?.items.push(...a?.items ?? []);
        this.isLoading = false;
      });
    }
  }
}
