import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CoreModule } from '../../core/core.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CoreModule,
    DropdownModule,
    FormsModule
  ]
})
export class SearchModule { }
