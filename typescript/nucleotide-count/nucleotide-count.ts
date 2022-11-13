type Counts = {
  G: number,
  A: number,
  C: number,
  T: number
}

const NUCLEOTIDES = "GACT"

export function nucleotideCounts(dna: string): Counts {
  let counts: Counts = {
    G: 0,
    A: 0,
    C: 0,
    T: 0
  }

  for(let i=0; i<dna.length; i++) {
    const nucleotide = dna[i]

    if(NUCLEOTIDES.indexOf(nucleotide) === -1) {
      throw new Error('Invalid nucleotide in strand')
    }

    switch(nucleotide) {
      case "G":
        counts.G++
        break
      case "A":
        counts.A++
        break
      case "T":
        counts.T++
        break
      case "C":
        counts.C++
        break
    }
  }

  return counts
}
