import { HeaderMenu } from "@app/modals/header-menu";
import { generateRoute } from "@core/utils/string.util";

// Function to generate subcategories
const generateSubCategories = (subCategoryNames: string[]) => {
    return subCategoryNames.map((name: string) => ({
        name,
        link: generateRoute(name)
    }));
};

// Function to generate categories
const generateCategories = (categoryData: { name: string; subCategories: string[]; }[]) => {
    return categoryData.map(category => ({
        name: category.name,
        link: generateRoute(category.name),
        subCategories: generateSubCategories(category.subCategories)
    }));
};

// Category data
const categoryData = {
    men: [
        { name: 'Topwear', subCategories: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Sweatshirts', 'Sweaters', 'Jackets', 'Blazers & Coats', 'Suits', 'Rain Jackets'] },
        { name: 'Indian & Festive Wear', subCategories: ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis'] },
        { name: 'Bottomwear', subCategories: ['Jeans', 'Casual Trousers', 'Formal Trousers', 'Shorts', 'Track Pants & Joggers'] },
        { name: 'Innerwear & Sleepwear', subCategories: ['Briefs & Trunks', 'Boxers', 'Vests', 'Sleepwear & Loungewear', 'Thermals'] },
        { name: 'Plus Size', subCategories: [] },
        { name: 'Footwear', subCategories: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers', 'Sandals & Floaters', 'Flip Flops', 'Socks'] },
        { name: 'Personal Care & Grooming', subCategories: [] },
        { name: 'Sunglasses & Frames', subCategories: [] },
        { name: 'Watches', subCategories: [] },
        { name: 'Sports & Active Wear', subCategories: ['Sports Shoes', 'Sports Sandals', 'Active T-Shirts', 'Track Pants & Shorts', 'Tracksuits', 'Jackets & Sweatshirts', 'Sports Accessories', 'Swimwear'] },
        { name: 'Gadgets', subCategories: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'] },
        { name: 'Fashion Accessories', subCategories: ['Wallets', 'Belts', 'Perfumes & Body Mists', 'Trimmers', 'Deodorants', 'Ties, Cufflinks & Pocket Squares', 'Accessory Gift Sets', 'Caps & Hats', 'Mufflers, Scarves & Gloves', 'Phone Cases', 'Rings & Wristwear', 'Helmets'] },
        { name: 'Bags & Backpacks', subCategories: [] },
        { name: 'Luggages & Trolleys', subCategories: [] },
    ],
    women: [
        { name: 'Indian & Fusion Wear', subCategories: ['Kurtas & Suits', 'Kurtis, Tunics & Tops', 'Sarees', 'Ethnic Wear', 'Leggings, Salwars & Churidars', 'Skirts & Palazzos', 'Dress Materials', 'Lehenga Cholis', 'Dupattas & Shawls', 'Jackets'] },
        { name: 'Belts, Scarves & More', subCategories: [] },
        { name: 'Watches & Wearables', subCategories: [] },
        { name: 'Western Wear', subCategories: ['Dresses', 'Tops', 'Tshirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Co-ords', 'Playsuits', 'Jumpsuits', 'Shrugs', 'Sweaters & Sweatshirts', 'Jackets & Coats', 'Blazers & Waistcoats'] },
        { name: 'Plus Size', subCategories: [] },
        { name: 'Maternity', subCategories: [] },
        { name: 'Sunglasses & Frames', subCategories: [] },
        { name: 'Footwear', subCategories: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters'] },
        { name: 'Sports & Active Wear', subCategories: ['Clothing', 'Footwear', 'Sports Accessories', 'Sports Equipment'] },
        { name: 'Lingerie & Sleepwear', subCategories: ['Bra', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals'] },
        { name: 'Beauty & Personal Care', subCategories: ['Makeup', 'Skincare', 'Premium Beauty', 'Lipsticks', 'Fragrances'] },
        { name: 'Gadgets', subCategories: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'] },
        { name: 'Jewellery', subCategories: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'] },
        { name: 'Backpacks', subCategories: [] },
        { name: 'Handbags, Bags & Wallets', subCategories: [] },
        { name: 'Luggages & Trolleys', subCategories: [] },
    ],
    kids: [
        { name: 'Boys Clothing', subCategories: ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Trousers', 'Clothing Sets', 'Ethnic Wear', 'Track Pants & Pyjamas', 'Jacket, Sweater & Sweatshirts', 'Party Wear', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs'] },
        { name: 'Girls Clothing', subCategories: ['Dresses', 'Tops', 'Tshirts', 'Clothing Sets', 'Lehenga choli', 'Kurta Sets', 'Party wear', 'Dungarees & Jumpsuits', 'Skirts & shorts', 'Tights & Leggings', 'Jeans, Trousers & Capris', 'Jacket, Sweater & Sweatshirts', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs'] },
        { name: 'Footwear', subCategories: ['Casual Shoes', 'Flipflops', 'Sports Shoes', 'Flats', 'Sandals', 'Heels', 'School Shoes', 'Socks'] },
        { name: 'Toys & Games', subCategories: ['Learning & Development', 'Activity Toys', 'Soft Toys', 'Action Figure / Play set'] },
        { name: 'Infants', subCategories: ['Bodysuits', 'Rompers & Sleepsuits', 'Clothing Sets', 'Tshirts & Tops', 'Dresses', 'Bottom wear', 'Winter Wear', 'Innerwear & Sleepwear', 'Infant Care'] },
        { name: 'Home & Bath', subCategories: ['Personal Care'] },
        { name: 'Kids Accessories', subCategories: ['Bags & Backpacks', 'Watches', 'Jewellery & Hair accessory', 'Sunglasses', 'Masks & Protective Gears', 'Caps & Hats'] },
        { name: 'Brands', subCategories: ['H&M', 'Max Kids', 'Pantaloons', 'United Colors Of Benetton Kids', 'YK', 'U.S. Polo Assn. Kids', 'Mothercare', 'HRX'] },
    ],
    home: [
        { name: 'Bed Linen & Furnishing', subCategories: ['Bed Runners', 'Mattress Protectors', 'Bedsheets', 'Bedding Sets', 'Blankets, Quilts & Dohars', 'Pillows & Pillow Covers', 'Bed Covers', 'Diwan Sets', 'Chair Pads & Covers', 'Sofa Covers'] },
        { name: 'Flooring', subCategories: ['Floor Runners', 'Carpets', 'Floor Mats & Dhurries', 'Door Mats'] },
        { name: 'Bath', subCategories: ['Bath Towels', 'Hand & Face Towels', 'Beach Towels', 'Towels Set', 'Bath Rugs', 'Bath Robes', 'Bathroom Accessories', 'Shower Curtains'] },
        { name: 'Lamps & Lighting', subCategories: ['Floor Lamps', 'Ceiling Lamps', 'Table Lamps', 'Wall Lamps', 'Outdoor Lamps', 'String Lights'] },
        { name: 'Home Décor', subCategories: ['Plants & Planters', 'Aromas & Candles', 'Clocks', 'Mirrors', 'Wall Décor', 'Festive Decor', 'Pooja Essentials', 'Wall Shelves', 'Fountains', 'Showpieces & Vases', 'Ottoman'] },
        { name: 'Cushions & Cushion Covers', subCategories: [] },
        { name: 'Curtains', subCategories: [] },
        { name: 'Home Gift Sets', subCategories: [] },
        { name: 'Kitchen & Table', subCategories: ['Table Runners', 'Dinnerware & Serveware', 'Cups and Mugs', 'Bakeware & Cookware', 'Kitchen Storage & Tools', 'Bar & Drinkware', 'Table Covers & Furnishings'] },
        { name: 'Storage', subCategories: ['Bins', 'Hangers', 'Organisers', 'Hooks & Holders', 'Laundry Bags'] },
        { name: 'Brands', subCategories: ['H&M', 'Marks & Spencer', 'Home Centre', 'Spaces', 'D\'Decor', 'Story@Home', 'Pure Home & Living', 'Swayam', 'Raymond Home', 'Maspar', 'My Trident', 'Cortina', 'Random', 'Ellementry', 'ROMEE', 'SEJ by Nisha Gupta'] },
    ],
    beauty: [
        { name: 'Makeup', subCategories: ['Lipstick', 'Lip Gloss', 'Lip Liner', 'Mascara', 'Eyeliner', 'Kajal', 'Eyeshadow', 'Foundation', 'Primer', 'Concealer', 'Compact', 'Nail Polish'] },
        { name: 'Skincare, Bath & Body', subCategories: ['Face Moisturiser', 'Cleanser', 'Masks & Peel', 'Sunscreen', 'Serum', 'Face Wash', 'Eye Cream', 'Lip Balm', 'Body Lotion', 'Body Wash', 'Body Scrub', 'Hand Cream', 'Baby Care', 'Masks'] },
        { name: 'Haircare', subCategories: ['Shampoo', 'Conditioner', 'Hair Cream', 'Hair Oil', 'Hair Gel', 'Hair Color', 'Hair Serum', 'Hair Accessory'] },
        { name: 'Fragrances', subCategories: ['Perfume', 'Deodorant', 'Body Mist'] },
        { name: 'Appliances', subCategories: ['Hair Straightener', 'Hair Dryer', 'Epilator'] },
        { name: 'Men\'s Grooming', subCategories: ['Trimmers', 'Beard Oil', 'Hair Wax'] },
        { name: 'Beauty Gift & Makeup Set', subCategories: ['Beauty Gift', 'Makeup Kit'] },
        { name: 'Premium Beauty', subCategories: [] },
        { name: 'Wellness & Hygiene', subCategories: [] },
        { name: 'Top Brands', subCategories: ['Lakme', 'Maybelline', 'LOreal', 'Philips', 'Bath & Body Works', 'THE BODY SHOP', 'Biotique', 'Mamaearth', 'MCaffeine', 'Nivea', 'Lotus Herbals', 'LOreal Professionnel', 'KAMA AYURVEDA', 'M.A.C', 'Forest Essentials'] },
    ],
};

// Generate the final data structure
export const headerMenu: HeaderMenu = {
    options: [
        {
            name: "Men",
            link: "shop/men",
            category: generateCategories(categoryData.men)
        },
        {
            name: "Women",
            link: "shop/women",
            category: generateCategories(categoryData.women)
        },
        {
            name: "Kids",
            link: "shop/kids",
            category: generateCategories(categoryData.kids)
        },
        {
            name: "Home & Living",
            link: "shop/home-living",
            category: generateCategories(categoryData.home)
        },
        {
            name: "Beauty",
            link: "shop/beauty",
            category: generateCategories(categoryData.beauty)
        },
    ]
};


