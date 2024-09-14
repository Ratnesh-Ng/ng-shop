import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core';
import { CartProductDetails, Product } from '@app/modals/product';

@Component({
  selector: 'app-pricing-details',
  templateUrl: './pricing-details.component.html',
  styleUrl: './pricing-details.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PricingDetailsComponent {

  public actions = input<boolean>(true);
  public products = input.required<Product[]>();

  public productDetails: Signal<CartProductDetails> = computed<CartProductDetails>(() => {
    const details: CartProductDetails = new CartProductDetails();
    details.totalMrp = this.products().reduce((acc, val) => acc + val.actualPrice, 0);
    details.discountOnMrp = this.products().reduce((acc, val) => (acc + (val.actualPrice - val.sellingPrice)), 0);
    details.totalAmountToPay = details.totalMrp - details.discountOnMrp;
    if ((details.totalAmountToPay != 0) && (details.totalAmountToPay < 500)) {
      details.shippingFee = 40;
    } else {
      details.shippingFee = 0;
    }
    return details;
  });
}
