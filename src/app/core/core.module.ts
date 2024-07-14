import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    RatingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductCardComponent,
    RatingCardComponent
  ]
})
export class CoreModule { }
