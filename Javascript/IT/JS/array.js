function findFirstDuplicateCharacter(str) {
  const charMap = new Map(); // To store characters and their counts

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charMap.has(char)) {
      return char; // Found the first duplicate character
    }
    charMap.set(char, true); // Add the character to the map
  }

  return null; // No duplicate character found
}

// Example usage
const inputString = "Hello World";
const firstDuplicateChar = findFirstDuplicateCharacter(inputString);
console.log(firstDuplicateChar);
