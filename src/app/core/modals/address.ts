export interface Address {
    id:number;
    name: string;
    mobile: string;
    pinCode: string;
    address: string;
    locality: string;
    city: string;
    state: string;
    type: AddressType;
    isDefaultAddress: boolean
}

export enum AddressType {
    Home = "Home",
    Work = "Work",
    Office = "Office",
}