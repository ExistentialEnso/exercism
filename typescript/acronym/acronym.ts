const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function parse(phrase: string): string {
  const pieces = phrase.split(/ |-/)
  let acronym = ""

  for(const piece of pieces) {
    acronym += piece[0].toUpperCase()

    // Look for and add any uppercase characters in the mix
    for(let i=1; i<piece.length; i++) {
      // Enables us to get the "HT" in HyperText but not the "PHP" in "PHP: Hypertext Preprocessor"
      if(UPPERCASE.indexOf(piece[i]) > -1 && UPPERCASE.indexOf(piece[i-1]) == -1) {
        acronym += piece[i]
      }
    }
  }
  
  return acronym
}
