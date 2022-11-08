export function isPangram(input: string): boolean {
  let letters = "abcdefghijklmnopqrstuvwxyz"
  const lowercaseInput = input.toLowerCase()

  for(let i=0; i<lowercaseInput.length; i++) {
    letters = letters.replace(lowercaseInput[i], "")
  }

  return letters == ""
}
