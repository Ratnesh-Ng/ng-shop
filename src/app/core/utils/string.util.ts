export const specialCharacters = "@/#&,;:"

/**
 * Removes extra spaces from a string.
 * @param {string} str - The input string with extra spaces.
 * @returns {string} - The string with extra spaces removed.
 */
export const removeExtraSpaces = (str: string): string => {
    return str.replace(/\s+/g, ' ').trim();
};

/**
 * Removes all occurrences of a specific special character from a string.
 * @param {string} str - The input string.
 * @param {string} charToRemove - The special character to remove.
 * @returns {string} - The string with the specified character removed.
 */
export const removeSpecialCharacter = (str: string, charToRemove: string): string => {
    // Create a regular expression dynamically to match the character to remove
    const regex = new RegExp(`[${charToRemove}]`, 'g');
    return str.replace(regex, ' ');
};

/**
 * Generates a route string by removing specified special characters and extra spaces from the input string,
 * and then replacing spaces with hyphens.
 * 
 * @param str - The input string.
 * @param specialCharactersToRemove - A string containing the special characters to remove from the input string.
 * @returns - The route string with specified characters removed and spaces replaced by hyphens.
 */
export const generateRoute = (str: string, specialCharactersToRemove: string = specialCharacters): string => {
      // Remove extra spaces
      const trimmedString = removeExtraSpaces(str);
      // Remove special characters
      const cleanedString = removeSpecialCharacter(trimmedString, specialCharactersToRemove);
      // Replace spaces and multiple hyphens with a single hyphen
      let route = cleanedString.replace(/\s+/g, '-').replace(/-+/g, '-');
      // Remove leading or trailing hyphens
      route = route.replace(/^-|-$/g, '');
      return route?.toLowerCase();
}
