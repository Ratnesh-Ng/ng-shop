import { FormGroup } from "@angular/forms";

export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export const logout = () => {
    localStorage.removeItem("ng-shop-token");
    window.location.href = '/'
}

export const generateOTP = () => {
    // Generate a random number between 100000 and 999999
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
}

export const logInvalidControls = (formGroup: FormGroup): string[] => {
    const invalidControls = [];
    for (const key in formGroup.controls) {
        const isInvalid = formGroup.get(key)?.invalid;
        if (isInvalid) {
            invalidControls.push(key);
        }
    }
    return invalidControls
}