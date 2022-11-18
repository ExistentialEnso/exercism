const ALLERGENS = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats"
]

export class Allergies {
  allergenIndex: number

  constructor(_allergenIndex: number) {
    // Save our allergen index for later
    this.allergenIndex = _allergenIndex
  }

  public list(): string[] {
    const matches: string[] = []

    // Get a binary string version of our index
    const binary = this.allergenIndex.toString(2)

    // Work from the end of our string backwards
    // A "1" in this representation is a match on our allergen index
    for(let i=0; i<ALLERGENS.length; i++) {
      if(binary[binary.length-i-1] === "1") {
        matches.push(ALLERGENS[i])
      }
    }

    return matches
  }

  public allergicTo(allergen: string): unknown {
    return this.list().indexOf(allergen) > -1
  }
}
