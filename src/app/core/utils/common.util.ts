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