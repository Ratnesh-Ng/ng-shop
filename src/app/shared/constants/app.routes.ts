export const AppRoutes = {
    home: '/home',
    shop: '/shop',
    product: (UUID: string) => `/product/${UUID}`,
    login: '/auth/login',
    signup: '/auth/signup',
};