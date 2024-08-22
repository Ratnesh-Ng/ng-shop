/* eslint-disable @typescript-eslint/no-explicit-any */

export const formatEnumToArray = <T>(enumObj: any): { key: string, value: T }[] => {
    return Object.keys(enumObj).map((key) => {

        const formattedKey = key
            .replace(/_/g, '')         // Replace underscores
            .replace(/s([A-Z])/g, "'s $1")  // Add apostrophe before 's' followed by an uppercase letter
            .replace(/([a-z])([A-Z])/g, '$1 $2');  // Split camel case key by uppercase letters

        return {
            key: formattedKey,
            value: (enumObj as any)[key]
        };
    });
}