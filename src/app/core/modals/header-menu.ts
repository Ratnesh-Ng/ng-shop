export interface HeaderMenu {
    options: {
        name: string;
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