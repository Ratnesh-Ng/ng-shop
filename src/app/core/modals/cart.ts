import { Product } from "./product";

export interface Cart extends Product {
    size: string,
    sellerName: string;
    sellerId: number;
    deliveredTill: Date;
}