const TRANSCRIPTIONS: any = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export function toRna(dna: string) {
  let rna = ''

  for(let i of dna) {
    if(!TRANSCRIPTIONS[i])
      throw new Error("Invalid input DNA.")

    rna += TRANSCRIPTIONS[i]
  }

  return rna
}
