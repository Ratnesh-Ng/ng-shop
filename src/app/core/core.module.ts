import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { RouterModule } from '@angular/router';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { PricingDetailsComponent } from './components/pricing-details/pricing-details.component';
import { AddressPipe } from './pipes/address.pipe';



@NgModule({
  declarations: [
    ProductCardComponent,
    RatingCardComponent,
    ClickStopPropagationDirective,
    InfiniteScrollDirective,
    PricingDetailsComponent,
    AddressPipe,
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
    PricingDetailsComponent,
    AddressPipe,
  ]
})
export class CoreModule { }
