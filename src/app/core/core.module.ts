import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductCardComponent,
    RatingCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductCardComponent,
    RatingCardComponent,
    RouterModule
  ]
})
export class CoreModule { }
