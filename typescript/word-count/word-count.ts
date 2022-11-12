export function count(input: string): Map<string, number> {
  const wordCounts = new Map()
  const parts = input.split(/ |\n|\t/)

  for(const part of parts) {
    const word = part.trim().toLowerCase()

    if(word === "")
      continue

    if(!wordCounts.has(word))
      wordCounts.set(word, 1)
    else
      wordCounts.set(word, wordCounts.get(word) + 1)
  }

  return wordCounts
}
