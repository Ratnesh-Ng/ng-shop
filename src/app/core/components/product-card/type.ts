import { Product } from "@app/modals/product";

export type ProductCardEvent = {
    eventType: ProductCardEventType;
    data: Product;
}

export type ProductCardEventType = 'removeFromWishlist' | 'moveToBag' | 'addToWishlist';