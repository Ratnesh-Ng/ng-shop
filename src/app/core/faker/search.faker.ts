import { faker } from '@faker-js/faker';
import { FilterOptions, Search, CategoryFilter, GenderFilter, PriceRangeFilter, ColorFilter, BrandFilter, Discount } from '@app/modals/search';
import { generateFakeProducts } from './product.faker';
import { Gender } from '@core/enums/gender.enum';


const generateDiscounts = (): Discount[] => {
    return [
        { name: '10% Off', value: 10 },
        { name: 'Summer Sale', value: 20 },
        { name: 'Black Friday', value: 50 }
    ];
};

const generateCategories = (): CategoryFilter[] => {
    return Array.from({ length: 5 }, () => ({
        id: generateUniqueId(),
        name: faker.commerce.department(),
        totalItems: faker.number.int({ min: 10, max: 100 })
    }));
};

const generateGenders = (): GenderFilter[] => {
    return Object.values(Gender).map(gender => ({
        id: gender,
        name: gender,
        totalItems: faker.number.int({ min: 10, max: 100 })
    }));
};

const generatePriceRange = (): PriceRangeFilter => ({
    min: faker.number.int({ min: 10, max: 100 }),
    max: faker.number.int({ min: 101, max: 1000 })
});

const generateColors = (): ColorFilter[] => {
    return Array.from({ length: 5 }, () => ({
        id: generateUniqueId(),
        name: faker.color.human(),
        hexCode: faker.internet.color(),
        totalItems: faker.number.int({ min: 10, max: 100 })
    }));
};

const generateBrands = (): BrandFilter[] => {
    return Array.from({ length: 5 }, () => ({
        id: generateUniqueId(),
        name: faker.company.name(),
        totalItems: faker.number.int({ min: 10, max: 100 })
    }));
};

const generateFilterOptions = (): FilterOptions => ({
    categories: generateCategories(),
    genders: generateGenders(),
    priceRange: generatePriceRange(),
    colors: generateColors(),
    brands: generateBrands(),
    discount: generateDiscounts(),
});

const generatedIds = new Set<number>();

function generateUniqueId(min = 1, max = 10000): number {
    let id: number;
    do {
        id = faker.number.int({ min, max });
    } while (generatedIds.has(id));
    generatedIds.add(id);
    return id;
}


export const generateFakeSearchData = (): Search => ({
    items: generateFakeProducts(20),
    filterOption: generateFilterOptions()
});

