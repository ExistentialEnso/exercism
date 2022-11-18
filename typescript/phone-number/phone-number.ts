const DIGITS = "1234567890"
const LETTERS = "abcdefghijklmnopqrstuvwxyz"
const PUNCT = "!:@"

export function clean(input: string): string {
  let cleaned = ""

  for(let i=0; i<input.length; i++) {
    if(DIGITS.indexOf(input[i]) > -1) {
      cleaned += input[i]
    } else if(LETTERS.indexOf(input[i].toLowerCase()) > -1) {
      throw new Error('Letters not permitted')
    } else if(PUNCT.indexOf(input[i]) > -1) {
      throw new Error('Punctuations not permitted')
    }
  }

  // Check validity of length
  if(cleaned.length < 10) {
    throw new Error('Incorrect number of digits')
  } else if(cleaned.length > 11) {
    throw new Error('More than 11 digits')
  }

  // Trim of leading "1" if necessary
  if(cleaned.length === 11 && cleaned[0] !== "1") {
    throw new Error('11 digits must start with 1')
  } else if(cleaned.length === 11) {
    cleaned = cleaned.slice(1)
  }

  // Check validity of area code
  if(cleaned[0] === "0") {
    throw new Error('Area code cannot start with zero')
  } else if(cleaned[0] === "1") {
    throw new Error('Area code cannot start with one')
  }

  // Check validity of exchange code
  if(cleaned[3] === "0") {
    throw new Error('Exchange code cannot start with zero')
  } else if(cleaned[3] === "1") {
    throw new Error('Exchange code cannot start with one')
  }

  return cleaned
}
