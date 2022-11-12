export class Anagram {
  input: string

  constructor(input: string) {
    this.input = input.toLowerCase()
  }

  private isMatch(test: string) {
    // Words must be of matching length
    if(test.length != this.input.length)
      return false

    // Words are not anagrams of themselves
    if(test.toLowerCase() == this.input.toLowerCase())
      return false

    // Our check should be case insensitive
    test = test.toLowerCase()

    // Take a letter out of test for each letter in this.input
    for(let i=0; i<this.input.length; i++) {
      test = test.replace(this.input[i], "")
    }

    // Need to wind up with nothing
    return test === ""
  }

  public matches(...potentials: string[]): string[] {
    let matches: string[] = []

    for(const potential of potentials) {
      if(this.isMatch(potential)) {
        matches.push(potential)
      }
    }

    return matches
  }
}
