const letters = "abcdefghijklmnopqrstuvwxyz"

export function isIsogram(input: string): boolean {
  const alreadyFound = new Map<string, boolean>()

  input = input.toLowerCase()

  for(let i=0; i<input.length; i++) {
    if(letters.indexOf(input[i]) > -1) {
      if(alreadyFound.get(input[i]))
        return false

        alreadyFound.set(input[i], true)
    }
  }

  // If we "survived," it's an isogram
  return true
}
