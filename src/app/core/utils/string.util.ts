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