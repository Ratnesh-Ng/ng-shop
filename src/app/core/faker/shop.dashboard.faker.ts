import { IShopDashboard } from "@app/modals/shop-dashboard";
import { generateRoute } from "@core/utils/string.util";
import { faker } from "@faker-js/faker";

const generateTitle = () => {
  const templates = [
    'TRENDING IN {category}',
    'NG SHOP LUXE',
    'EXPLORE TOP BRANDS',
    'CATEGORIES TO BAG',
    'BIGGEST DEALS ON TOP BRANDS'
  ];

  const categories = [
    'ACCESSORIES',
    'FOOTWEAR',
    'SPORTS WEAR',
    'INDIAN WEAR'
  ];

  const usedTitles = new Set();

  function getTitle() {
    while (usedTitles.size < templates.length * categories.length) {
      const template = faker.helpers.arrayElement(templates);
      const category = faker.helpers.arrayElement(categories);
      const title = template.replace('{category}', category);

      if (!usedTitles.has(title)) {
        usedTitles.add(title);
        return title;
      }
    }
    return "Deal of the Day"
  }

  return getTitle();
}

export const generateFakeDashboardData = (): IShopDashboard => {
  return {
    carousel: Array.from({ length: 5 }, () => {
      return {
        image: faker.image.url({ width: 1600, height: 800 }),
        link: `/${generateRoute(faker.word.words({ count: { min: 2, max: 5 } }))}`
      }
    }),
    options: Array.from({ length: 5 }, () => {
      const title = generateTitle();
      return {
        cards: Array.from({ length: 5 }, () => { return { image: faker.image.url(), link: `/${generateRoute(title)}`, cardCss: "" } }),
        title: title,
        optionsCss: ""
      }
    })
  }
}

export const shopDashboard: IShopDashboard = generateFakeDashboardData();