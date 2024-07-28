import { Environment } from "@environment/environment.dev";

const baseUrl = Environment.host;
export const ApiRoutes = {
    wishlist: `${baseUrl}/wishlist`,
    wishlistByID: (ID: string | number) => `${baseUrl}/wishlist/${ID}`,
    productByUUID: (UUID: string) => `${baseUrl}/products?uuid=${UUID}`,
    productByID: (ID: string | number) => `${baseUrl}/products/${ID}`,
    products: `${baseUrl}/products`,
};

