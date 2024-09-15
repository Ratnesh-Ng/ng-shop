export const AppRoutes = {
    home: '/home',
    shop: '/shop',
    product: (UUID: string) => `/product/${UUID}`,
    login: '/auth/login',
    signup: '/auth/signup',
    wishlist: '/wishlist',
    cart: '/checkout/cart',
    address: '/checkout/address',
    payment: '/checkout/payment',
    profile: '/my/profile',
    orders: '/my/orders',
};