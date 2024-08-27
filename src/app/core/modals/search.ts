import { Gender } from "@core/enums/gender.enum"
import { Product } from "./product";

export interface Discount {
    name: string; // Name of the discount (e.g., "10% Off", "Summer Sale")
    value: number; // Discount value in percentage (e.g., 10 for 10% off)
}

export interface CategoryFilter {
    id: string | number; // Unique identifier for the category
    name: string; // Name of the category
    totalItems: number; // Total items in the category
}

export interface GenderFilter {
    id: Gender; // Unique identifier for the gender
    name: Gender; // Name of the gender (e.g., "Male", "Female", "Unisex")
    totalItems: number; // Total items in the gender category
}

export interface PriceRangeFilter {
    min: number; // Minimum price
    max: number; // Maximum price
}

export interface ColorFilter {
    id: string | number; // Unique identifier for the color
    name: string; // Name of the color (e.g., "Red", "Blue")
    hexCode: string; // HEX code for the color
    totalItems: number; // Total items in the color category
}

export interface BrandFilter {
    id: string | number; // Unique identifier for the brand
    name: string; // Name of the brand
    totalItems: number; // Total items in the brand category
}

export interface FilterOptions {
    categories: CategoryFilter[]; // Array of category filters
    genders: GenderFilter[]; // Array of gender filters
    priceRange: PriceRangeFilter; // Price range filter
    colors: ColorFilter[]; // Array of color filters
    brands: BrandFilter[]; // Array of brand filters
    discount: Discount[]; // Discount filter
}

export interface Search {
    items: Product[],
    filterOption: FilterOptions
}

export class QueryOptions {
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

export class FilterValue {
    categories: (number | string)[] = []; // category filters
    genders!: Gender; // gender filters
    priceRange!: number; // Price range filter
    colors: (number | string)[] = []; // color filters
    brands: (number | string)[] = []; // brand filters
    discount!: number; // Discount filter
}