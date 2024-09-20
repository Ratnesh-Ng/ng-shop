import { Order } from "@app/modals/order";
import { faker } from "@faker-js/faker";
import { generateFakeAddress } from "./address.faker";
import { generateFakeProducts } from "./product.faker";

const orderStatuses = [
    "Pending",
    "Confirmed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
    "Canceled",
    "Refunded",
    "Failed",
    "Returned",
    "Partially Shipped",
    "Awaiting Payment",
    "Hold",
    "Ready for Pickup"
];

export const createFakePayment = () => {
    return {
        email: faker.internet.email(),
        mobile: faker.phone.number(),
        paymentMethod: faker.helpers.arrayElement(['Credit Card', 'Pay on Delivery']),
        amount: `${faker.number.int({ max: 50000, min: 500 })}`
    }
}

export const createFakeOrder = (): Order => {
    const orderID = `${faker.number.int()}`;
    const orderDate = faker.date.past();
    const deliveryDate = faker.date.between({ from: orderDate, to: faker.date.future() });
    const address = generateFakeAddress(1); //TODO
    return {
        orderId: orderID,
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        paymentInfo: createFakePayment(),
        products: generateFakeProducts(faker.number.int({ max: 5, min: 1 })),
        shippingInfo: address,
        status: faker.helpers.arrayElement(orderStatuses),
    }
}

export const generateFakeOrders = (length: number) => Array.from<Order>({ length: length }).map(() => createFakeOrder());