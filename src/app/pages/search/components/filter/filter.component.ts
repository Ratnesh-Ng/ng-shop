import { Component, input, InputSignal, model, ModelSignal } from '@angular/core';
import { formatEnumToArray } from '../../../../core/utils/enum.util';
import { Gender } from '@core/enums/gender.enum';
import { ProductFilterOptions, ProductFilterValue } from '@app/modals/search';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  genderEnumArr = formatEnumToArray(Gender);
  value: ModelSignal<ProductFilterValue> = model.required<ProductFilterValue>();
  filter: InputSignal<ProductFilterOptions | undefined> = input.required<ProductFilterOptions | undefined>();

  onCheck(event: Event, value: number | string, type: "brands" | "colors" | "categories") {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.value()[type].push(value)
    } else {
      this.value()[type] = this.value()[type].filter(a => a != value)
    }
  }

}
