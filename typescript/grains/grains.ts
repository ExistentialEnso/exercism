export const square = (num: number): bigint => {
  if(num < 1 || num > 64) {
    throw new Error('Invalid square number.')
  }

  return BigInt(Math.pow(2, num-1))
}

export const total = () => {
  let tally: bigint = 0n

  for(let i=1; i<=64; i++) {
    tally += square(i)
  }

  return tally
}
