import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { RouterModule } from '@angular/router';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';



@NgModule({
  declarations: [
    ProductCardComponent,
    RatingCardComponent,
    ClickStopPropagationDirective,
    InfiniteScrollDirective,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    RatingCardComponent,
    RouterModule,
    ClickStopPropagationDirective,
    InfiniteScrollDirective,
  ]
})
export class CoreModule { }
