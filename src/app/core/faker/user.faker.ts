import { faker, SexType } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

interface User {
    id: string;
    avatar: string;
    birthday: Date;
    email: string;
    firstName: string;
    lastName: string;
    sex: SexType;
    subscriptionTier: SubscriptionTier;
}

function createRandomUser(): User {
    const sex = faker.person.sexType();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName });

    return {
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email,
        firstName,
        lastName,
        sex,
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
}

export const fakeUser = createRandomUser();
export const fakeUsers = (length: number) => Array.from<User>({ length: length }).map(createRandomUser);