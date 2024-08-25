import { Component, model, ModelSignal } from '@angular/core';
import { formatEnumToArray } from '../../../../core/utils/enum.util';
import { Gender } from '@core/enums/gender.enum';
import { FilterOptions } from '@app/modals/search';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  
  genderEnumArr = formatEnumToArray(Gender);
  filter: ModelSignal<FilterOptions|undefined> = model.required<FilterOptions|undefined>();

}
