import { faker } from "@faker-js/faker";

export interface Product {
    id: number;
    uuid: string;
    name: string;
    description: string;
    actualPrice: number;
    sellingPrice: number;
    discount: number;
    ratings: number;
    reviewsCount: number;
    promotion: boolean;
    urls: string[];
    sizes: string[];
}

// Customized product types for more specific names
const productTypes = [
    'T-shirt', 'Jeans', 'Sneakers', 'Backpack', 'Smartphone', 'Headphones',
    'Watch', 'Gaming Laptop', 'Coffee Maker', 'Yoga Mat', 'Running Shoes',
    'Digital Camera', 'Guitar', 'E-reader', 'Portable Speaker', 'Smart TV'
];

// Custom function to generate a more genuine product name
const generateProductName = () => {
    const type = faker.helpers.arrayElement(productTypes);
    const adjective = faker.commerce.productAdjective();
    const material = faker.commerce.productMaterial();
    return `${adjective} ${material} ${type}`;
};

// Custom function to generate a more genuine product description
const generateProductDescription = () => {
    const features = faker.commerce.productDescription();
    const benefit = faker.company.catchPhrase();
    return `${features} ${benefit}`;
};



// Function to generate random product details
const createRandomProduct = () => {
    // Generate random details
    const id = faker.number.int();
    const uuid = faker.string.uuid();
    const name = generateProductName();
    const description = generateProductDescription();
    const actualPrice = parseFloat(faker.commerce.price());
    const discountPercentage = faker.number.int({ min: 5, max: 50 });
    const sellingPrice = parseFloat((actualPrice * (1 - discountPercentage / 100)).toFixed(2)); // Calculate selling price
    const ratings = parseFloat((Math.random() * 5).toFixed(1)); // Random rating between 0.0 to 5.0
    const reviewsCount = faker.number.int({ min: 0, max: 500 }); // Random number of reviews (including 0)
    const promotion = faker.datatype.boolean();

    // Generate random URLs for product images
    const numberOfImages = faker.number.int({ min: 3, max: 6 }); // Random number of images (1 to 5)
    const urls = [];
    for (let i = 0; i < numberOfImages; i++) {
        const imageUrl = faker.image.url(); // Generate random image URL
        urls.push(imageUrl);
    }

    // Generate random sizes
    const sizes = ['Small', 'Medium', 'Large', 'XL']; // Example sizes, customize as needed

    // Return object with generated details
    return {
        id: id,
        uuid: uuid,
        name: name,
        description: description,
        actualPrice: actualPrice,
        sellingPrice: sellingPrice,
        discount: discountPercentage,
        ratings: ratings,
        reviewsCount: reviewsCount,
        promotion: promotion,
        urls: urls,
        sizes: sizes
    };
};

// Example usage:
export const fakeProduct = createRandomProduct();
export const fakeProducts = (length: number) => Array.from<Product>({ length: length }).map(createRandomProduct);