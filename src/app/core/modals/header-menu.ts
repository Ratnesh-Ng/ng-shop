export interface HeaderMenu {
    options: {
        name: string;
        link: string,
        category: HeaderCategory[]
    }[]
}

export interface HeaderCategory {
    name: string,
    link: string
    subCategories: {
        name: string,
        link: string
    }[]
}