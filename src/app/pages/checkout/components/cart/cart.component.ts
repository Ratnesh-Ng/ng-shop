import { Component } from '@angular/core';
import { Offer } from '@app/modals/offer';
import { ProductBase } from '@shared/base/product.base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent extends ProductBase {

  public offers: Observable<Offer[] | null> = this.productStore.queryOffers();
  public VisibleOffers = 1;

}
