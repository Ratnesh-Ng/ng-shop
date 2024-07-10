export interface Product {
    id: number;
    uuid: string;
    name: string;
    description: string;
    actualPrice: number;
    sellingPrice: number;
    discount: number;
    ratings: number;
    reviewsCount: number;
    promotion: boolean;
    urls: string[];
    sizes: string[];
}