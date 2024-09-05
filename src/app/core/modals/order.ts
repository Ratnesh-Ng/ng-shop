interface Product {
    name: string;
    price: string;
}

export interface Order {
    orderId: string;
    placedOn: string;
    deliveredOn: string;
    totalAmount: string;
    products: Product[];
}