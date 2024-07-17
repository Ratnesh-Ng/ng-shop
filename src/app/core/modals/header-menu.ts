export interface HeaderMenu {
    options: {
        name: string;
        category: {
            name: string,
            link: string
            subCategories: {
                name: string,
                link: string
            }[]
        }[]
    }[]
}
