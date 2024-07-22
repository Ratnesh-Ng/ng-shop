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
    otherInfo:string[];
    offers:Offers[],
    specifications:Specifications[]
    availableQuantity:number
}

interface Offers{
    title:string;
    info:string[];
    link:string
    linkLabel:string
}

interface Specifications{
    title:string;
    info:string;
}