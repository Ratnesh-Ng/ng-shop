export const scrollToTop = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export const logout = () => {
    localStorage.removeItem("ng-shop-token");
    window.location.href = '/'
}