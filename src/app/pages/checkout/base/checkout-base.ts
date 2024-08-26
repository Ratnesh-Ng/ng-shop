import { signal, WritableSignal } from "@angular/core";
import { Cart } from "@app/modals/cart";
import { CartProductDetails } from "@app/modals/product";
import { getData } from "@core/utils/http.util";
import { ProductBase } from "@shared/base/product.base";

export class CheckoutBase extends ProductBase {

    public cartItems: WritableSignal<Cart[]> = signal<Cart[]>([]);
    public productDetails: CartProductDetails = new CartProductDetails();
    
    constructor() {
        super();
        getData(this.productStore.queryCart()).then(a => {
            if (a?.length) {
                this.cartItems.set(a);
            }
        })
    }

    public calculateProductDetails() {
        this.productDetails.totalMrp = this.cartItems().reduce((acc, val) => acc + val.actualPrice, 0);
        this.productDetails.discountOnMrp = this.cartItems().reduce((acc, val) => (acc + (val.actualPrice - val.sellingPrice)), 0);
        this.productDetails.totalAmountToPay = this.productDetails.totalMrp - this.productDetails.discountOnMrp;
        if ((this.productDetails.totalAmountToPay != 0) && (this.productDetails.totalAmountToPay < 500)) {
            this.productDetails.shippingFee = 40;
        } else {
            this.productDetails.shippingFee = 0;
        }
        return this.productDetails;
    }
}