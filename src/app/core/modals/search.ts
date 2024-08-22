import { Gender } from "@core/enums/gender.enum"
import { Product } from "./product";

interface Discount {
    name: string; // Name of the discount (e.g., "10% Off", "Summer Sale")
    value: number; // Discount value in percentage (e.g., 10 for 10% off)
}

interface CategoryFilter {
    id: string; // Unique identifier for the category
    name: string; // Name of the category
    totalItems: number; // Total items in the category
}

interface GenderFilter {
    id: Gender; // Unique identifier for the gender
    name: Gender; // Name of the gender (e.g., "Male", "Female", "Unisex")
    totalItems: number; // Total items in the gender category
}

interface PriceRangeFilter {
    min: number; // Minimum price
    max: number; // Maximum price
}

interface ColorFilter {
    id: string; // Unique identifier for the color
    name: string; // Name of the color (e.g., "Red", "Blue")
    hexCode: string; // HEX code for the color
    totalItems: number; // Total items in the color category
}

interface BrandFilter {
    id: string; // Unique identifier for the brand
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


