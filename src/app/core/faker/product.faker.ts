import { Product } from "@app/modals/product";
import { faker } from "@faker-js/faker";
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

const generateOffers = (numOffers: number) => {
    const offers = [];

    // Define meaningful link labels
    const linkLabels = [
        "Learn More",
        "Get It Now",
        "Discover",
        "Explore",
        "Find Out More",
        "Shop Now",
        "Check It Out"
    ];

    for (let i = 0; i < numOffers; i++) {
        // Generate random number of info items (between 1 to 4)
        const numInfoItems = faker.number.int({ min: 1, max: 4 });
        const info = [];
        for (let j = 0; j < numInfoItems; j++) {
            // Generate random info text between 30 to 60 characters long
            let infoText = faker.lorem.sentence();
            while (infoText.length < 30 || infoText.length > 60) {
                infoText = faker.lorem.sentence();
            }
            info.push(infoText);
        }

        const offer = {
            title: faker.commerce.productName(),  // Generate a product name as title
            info: info,  // Store info as array of sentences
            link: faker.internet.url(),  // Generate a random URL
            linkLabel: faker.helpers.arrayElement(linkLabels)  // Pick a random meaningful link label
        };

        offers.push(offer);
    }

    return offers;
}

const generateSpecifications = (numSpecifications: number) => {
    const specifications = [];

    // Define meaningful titles and corresponding generators
    const specificationTypes = [
        { title: "Main Trend", generator: () => faker.lorem.words(2) + ' ' + faker.word.words() },
        { title: "Fit", generator: () => faker.helpers.arrayElement(["Oversized", "Slim Fit", "Regular Fit"]) },
        { title: "Fabric", generator: () => faker.helpers.arrayElement(["Cotton", "Polyester", "Silk", "Denim"]) },
        { title: "Color", generator: () => faker.color.human() + ' ' + faker.color.human() },
        { title: "Season", generator: () => faker.helpers.arrayElement(["Spring", "Summer", "Autumn", "Winter"]) + ' ' + faker.helpers.arrayElement(["Collection", "Line"]) },
        { title: "Occasion", generator: () => faker.helpers.arrayElement(["Casual", "Formal", "Party", "Work"]) + ' ' + faker.word.words() }
    ];

    // Generate specified number of specifications
    for (let i = 0; i < numSpecifications; i++) {
        // Randomly choose a specification type
        const { title, generator } = faker.helpers.arrayElement(specificationTypes);

        // Generate specification info
        const info = generator();

        specifications.push({ title, info });
    }

    return specifications;
}

// Function to generate random product details
export const createFakeProduct = () => {
    // Generate random details
    const id = faker.number.int();
    const uuid = faker.string.uuid();
    const name = generateProductName();
    const brand = faker.company.name();
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
    const sizes = ['S', 'M', 'L', 'XL']; // Example sizes, customize as needed
    const otherInfo = ['100% Original Products', 'Pay on delivery might be available', 'Easy 14 days returns and exchanges']
    const offers = generateOffers(5);
    const specifications = generateSpecifications(5);
    const availableQuantity = faker.number.int({ max: 100 });
    // Return object with generated details
    return {
        id: id,
        uuid: uuid,
        name: name,
        brand: brand,
        description: description,
        actualPrice: actualPrice,
        sellingPrice: sellingPrice,
        discount: discountPercentage,
        ratings: ratings,
        reviewsCount: reviewsCount,
        promotion: promotion,
        urls: urls,
        sizes: sizes,
        otherInfo: otherInfo,
        offers: offers,
        specifications: specifications,
        availableQuantity: availableQuantity,
        seller: {
            id: faker.number.int({ min: 1, max: 1000 }), // assuming seller IDs are between 1 and 1000
            name: faker.company.name(),
        },
        deliveredTill: faker.date.soon({ days: 10 }), // delivers within the next 10 days
        size: faker.helpers.arrayElement(['Small', 'Medium', 'Large', 'X-Large']),
    };
};

// Example usage:
export const fakeProducts = (length: number) => Array.from<Product>({ length: length }).map(createFakeProduct);
