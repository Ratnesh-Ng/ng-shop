/* eslint-disable @typescript-eslint/no-explicit-any */

export const formatEnumToArray = <T>(enumObj: any): { key: string, value: T }[] => {
    return Object.keys(enumObj).map((key) => {
        // Split camel case key by uppercase letters and join with space
        const formattedKey = key.replace(/([a-z])([A-Z])/g, '$1 $2');
        return {
            key: formattedKey,
            value: (enumObj as any)[key]
        };
    });
}