import { Product } from "./product";

export interface Cart extends Product {
    isSelected?: boolean;
    userId?: number | string;
}

export interface Wishlist extends Product {
    userId?: number | string;
}

export type CartItemEvent = {
    eventType: CartItemEventType;
    data: Cart;
}

export type CartItemEventType = 'removeFromCart' | 'onCheckToggle';