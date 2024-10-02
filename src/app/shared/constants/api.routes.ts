import { Environment } from "@environment/environment.dev";

const baseUrl = Environment.host;
export const ApiRoutes = {
    wishlist: `${baseUrl}/wishlist`,
    wishlistByID: (ID: string | number) => `${baseUrl}/wishlist/${ID}`,
    productByUUID: (UUID: string) => `${baseUrl}/products?uuid=${UUID}`,
    productByID: (ID: string | number) => `${baseUrl}/products/${ID}`,
    products: `${baseUrl}/products`,
    offers: `${baseUrl}/offers`,
    offerByID: (ID: string | number) => `${baseUrl}/offers/${ID}`,
    cart: `${baseUrl}/cart`,
    cartByID: (ID: string | number) => `${baseUrl}/cart/${ID}`,
    address: `${baseUrl}/addresses`,
    addressByID: (ID: string | number) => `${baseUrl}/addresses/${ID}`,
    orders: `${baseUrl}/orders`,
    orderByID: (ID: string | number) => `${baseUrl}/orders/${ID}`,
    getOtp:`${baseUrl}/auth/getOtp`,
    validateOtp:`${baseUrl}/auth/validateOtp`,
    user:`${baseUrl}/users`,
    userById:(ID: string | number) => `${baseUrl}/users/${ID}`,
};

