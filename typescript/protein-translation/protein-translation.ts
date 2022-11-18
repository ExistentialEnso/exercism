const codonMapping = new Map<string, string>([
  ["AUG", "Methionine"],
  ["UUU", "Phenylalanine"],
  ["UUC", "Phenylalanine"],
  ["UUA", "Leucine"],
  ["UUG", "Leucine"],
  ["UUG", "Leucine"],
  ["UCU", "Serine"],
  ["UCC", "Serine"],
  ["UCA", "Serine"],
  ["UCG", "Serine"],
  ["UAU", "Tyrosine"],
  ["UAC", "Tyrosine"],
  ["UGU", "Cysteine"],
  ["UGC", "Cysteine"],
  ["UGG", "Tryptophan"],
  ["UAA", "STOP"],
  ["UAG", "STOP"],
  ["UGA", "STOP"],
])

export function translate(rna: string): string[] {
  const codons: string[] = []

  for(let i=0; i<rna.length; i+=3) {
    const slice = rna.slice(i, i+3)
    const value = codonMapping.get(slice)

    if(value && value === "STOP") {
      return codons
    } else if(value) {
      codons.push(value)
    }
  }

  return codons
}
