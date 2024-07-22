export interface IShopDashboard {
    carousel: {
        image: string;
        link: string;
    }[];
    options: {
        title: string;
        cards: {
            link: string;
            image: string;
            cardCss: string
        }[];
        optionsCss: string;
    }[]
}