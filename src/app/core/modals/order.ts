import { Address } from "./address";
import { Product } from "./product";

export interface Order {
    orderId: string;
    orderDate: Date;
    deliveryDate: Date;
    products: Product[];
    shippingInfo: Address;
    paymentInfo: PaymentInfo;
    status: string;
}
export interface PaymentInfo {
    paymentMethod: string;
    mobile: string;
    email: string;
    amount: string;
}

export interface PlaceOrder {
    id?: number | string
    addressId?: number | string,
    productIds?: (number | string)[]
    PaymentInfo?: PaymentInfo,
}