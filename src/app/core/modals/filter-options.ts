export class FilterOptions {
    sortBy: { key: string, value: unknown } = { value: SortBy.Recommended, key: "Recommended" }
}

export enum SortBy {
    Recommended = "Recommended",
    New = "New",
    Popularity = "Popularity",
    BetterDiscount = "Discount",
    PriceHighToLow = "PriceHTL",
    PriceLowToHigh = "PriceLTH",
    CustomerRating = "Rating",
}