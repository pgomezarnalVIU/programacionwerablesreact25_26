export const passwordGenerator = {
  // Generate password string based on character options
  generatePassword: (
    passwordLength: number,
    options: {
      includeUpperCase: boolean;
      includeLowerCase: boolean;
      includeNumbers: boolean;
      includeSymbols: boolean;
    }
  ): string => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (options.includeUpperCase) {
      characterList += upperCaseChars;
    }
    if (options.includeLowerCase) {
      characterList += lowerCaseChars;
    }
    if (options.includeNumbers) {
      characterList += digitChars;
    }
    if (options.includeSymbols) {
      characterList += specialChars;
    }

    return passwordGenerator.createPassword(characterList, passwordLength);
  },

  // Create password from a string of characters
  createPassword: (characters: string, passwordLength: number): string => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  },
};
