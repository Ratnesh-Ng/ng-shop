export class FilterOptions {
    sortBy: { key: string, value: unknown } = { value: SortBy.What_sNew, key: "What's New" }
}

export enum SortBy {
    Recommended = "Recommended",
    What_sNew = "New",
    Popularity = "Popularity",
    BetterDiscount = "Discount",
    PriceHighToLow = "PriceHTL",
    PriceLowToHigh = "PriceLTH",
    CustomerRating = "Rating",
}