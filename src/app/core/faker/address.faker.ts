import { Address, AddressType } from "@app/modals/address";
import { faker } from "@faker-js/faker";

export const generateFakeAddress = (id: number): Address => {
    return {
        id,
        name: faker.person.fullName(),
        mobile: faker.phone.number(), // Generates a 10-digit number
        pinCode: faker.location.zipCode(),
        address: faker.location.streetAddress(),
        locality: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        type: faker.helpers.arrayElement(Object.values(AddressType)),
        isDefaultAddress: faker.datatype.boolean(),
        email: faker.internet.email(),
        userId: null
    };
}

export const generateFakeAddresses = (count: number): Address[] => {
    return Array.from({ length: count }, (_, index) => generateFakeAddress(index + 1));
}
