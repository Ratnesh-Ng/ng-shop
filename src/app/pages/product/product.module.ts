import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CoreModule } from "../../core/core.module";
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule,
    CarouselModule
  ]
})
export class ProductModule { }
