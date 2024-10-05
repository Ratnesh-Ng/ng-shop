import { FormControl } from "@angular/forms";

export interface Address {
    id?: number | string | null;
    userId: number | string | null;
    name: string| null;
    mobile: string| null;
    email: string| null;
    pinCode: string| null;
    address: string| null;
    locality: string| null;
    city: string| null;
    state: string| null;
    type: AddressType| null;
    isDefaultAddress: boolean| null
}

export interface AddressForm {
    id: FormControl<string | number | null>;
    userId: FormControl<string | number | null>;
    name: FormControl<string | null>;
    mobile: FormControl<string | null>;
    email: FormControl<string | null>;
    pinCode: FormControl<string | null>;
    address: FormControl<string | null>;
    locality: FormControl<string | null>;
    city: FormControl<string | null>;
    state: FormControl<string | null>;
    type: FormControl<AddressType | null>;
    isDefaultAddress: FormControl<boolean | null>
}

export enum AddressType {
    Home = "Home",
    Work = "Work",
    Office = "Office",
}

export type AddressCardEvent = {
    eventType: AddressCardEventType;
    data: Address;
}

export type AddressCardEventType = 'remove' | 'edit' | 'onCheckToggle';
export type AddressEditModalEvent = { eventType: 'close' | 'submit'; address?: Address };