import { Product } from "./product";

export interface Cart extends Product {
    isSelected?: boolean;
}

export type CartItemEvent = {
    eventType: CartItemEventType;
    data: Cart;
}

export type CartItemEventType = 'removeFromCart' | 'onCheckToggle';