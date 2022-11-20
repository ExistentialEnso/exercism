type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

export function triplets(options: Options): Triplet[] {
  let matches: Triplet[] = []

  const minFactor = options.minFactor ?? 1
  const maxFactor = options.maxFactor ?? (options.sum-3)
  const { sum } = options

  for(let a=minFactor; a<=maxFactor; a++) {
    for(let b=a+1; b<=maxFactor; b++) {
      let c = Math.sqrt(a*a + b*b)

      if(a+b+c === sum && c <= maxFactor) {
        matches.push(new Triplet(a, b, c))
      }
    }
  }

  return matches
}

class Triplet {
  data: number[]

  constructor(a: number, b: number, c: number) {
    this.data = [a,b,c]
  }

  toArray(): [number, number, number] {
    return [this.data[0], this.data[1], this.data[2]]
  }
}
