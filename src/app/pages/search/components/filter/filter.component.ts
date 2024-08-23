import { Component, model, ModelSignal, OnInit } from '@angular/core';
import { formatEnumToArray } from '../../../../core/utils/enum.util';
import { Gender } from '@core/enums/gender.enum';
import { FilterOptions } from '@app/modals/search';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  
  genderEnumArr = formatEnumToArray(Gender);
  filter: ModelSignal<FilterOptions> = model.required<FilterOptions>();
  priceRange:number[] = [];
  
  ngOnInit(): void {
    this.priceRange = [this.filter().priceRange.min, this.filter().priceRange.max]
  }

}
