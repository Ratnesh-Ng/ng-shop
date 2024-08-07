export interface Product {
    id: number;
    uuid: string;
    name: string;
    brand: string;
    description: string;
    actualPrice: number;
    sellingPrice: number;
    discount: number;
    ratings: number;
    reviewsCount: number;
    promotion: boolean;
    urls: string[];
    sizes: string[];
    otherInfo: string[];
    offers: Offers[],
    specifications: Specifications[]
    availableQuantity: number
    seller: {
        id: number,
        name: string,
    }
    deliveredTill: Date;
    size: string; //TODO: move it to cart model
    quantity: number; //TODO: move it to cart model
}

interface Offers {
    title: string;
    info: string[];
    link: string
    linkLabel: string
}

interface Specifications {
    title: string;
    info: string;
}

export class CartProductDetails {
    totalMrp: number = 0;
    discountOnMrp: number = 0;
    couponDiscount: number = 0;
    platformFee: number = 20;
    shippingFee: number = 0;
    totalAmountToPay: number = 0;
}