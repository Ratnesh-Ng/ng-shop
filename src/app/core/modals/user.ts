import { Address } from "./address";

export interface User {
    id: number | string;
    email: string;
    mobile: string;
    address: Address;
    profilePicture: string;
    name: string;
    age: string;
}