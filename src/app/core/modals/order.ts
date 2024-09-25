import { Address } from "./address";
import { Product } from "./product";

export interface Order {
    id?: string|number;
    userId?: number | string;
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
    amount: string|number;
}

export interface PlaceOrder {
    id?: number | string
    addressId?: number | string,
    products?: { id: number | string, quantity: number }[]
    PaymentInfo?: PaymentInfo,
    orderStatus:string
}