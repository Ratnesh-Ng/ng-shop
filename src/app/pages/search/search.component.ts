import { Component, OnInit } from '@angular/core';
import { generateFakeSearchData } from '@app/faker/search.faker';
import { Search, QueryOptions, SortBy } from '@app/modals/search';
import { SearchBaseComponent } from '@core/base/search-base.component';
import { formatEnumToArray } from '@core/utils/enum.util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent extends SearchBaseComponent implements OnInit {

  sortByOptions = formatEnumToArray(SortBy);
  filterOptions: QueryOptions = new QueryOptions();

  searchResult: Search = generateFakeSearchData();

  override ngOnInit(): void {
    super.ngOnInit()
    this.getParams();
    console.log(this.searchResult)
  }

  private getParams() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
    });
  }

}
