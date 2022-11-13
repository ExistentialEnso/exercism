// Matches letters to a score at the same index in the other string
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const SCORES = "1332142418513113X11114484X"

export function score(word?: string): number {
  // Exercism's unit tests require us to accept undefined values and pass back 0 for them
  if(!word)
    return 0

  let score = 0

  // Loop through the word, letter by letter
  for(let i=0; i<word.length; i++) {
    const letter = word[i].toUpperCase()
    const index = LETTERS.indexOf(letter)

    if(index > -1) {
      let addedScore = SCORES[index]

      // "X" is used to represent 10 in one digit
      if(addedScore === "X")
        addedScore = "10"

      score += parseInt(addedScore)
    }
  }

  return score
}
