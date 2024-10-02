import { FormControl } from "@angular/forms";
import { Address } from "./address";

export interface User {
    id: number | string | null;
    email: string| null;
    mobile: string| null;
    alternateMobile: string| null;
    address: Address| null;
    profilePicture: string| null;
    name: string| null;
    username: string| null;
    dob: Date| null;
    gender: string| null;
    createdAt: Date| null;
}

export interface UserDetailsForm {
    id: FormControl<number | null | string>;
    email: FormControl<string | null>;
    mobile: FormControl<string | null>;
    alternateMobile: FormControl<string | null>;
    profilePicture: FormControl<string | null>;
    name: FormControl<string | null>;
    username: FormControl<string | null>;
    dob: FormControl<Date | null>;
    gender: FormControl<string | null>;
}