export function classify(value: number) {
  if(value < 1)
    throw new Error('Classification is only possible for natural numbers.')

  let aliquotSum = 0

  for(let i=1; i<value; i++) {
    if(value%i == 0)
      aliquotSum += i
  }

  if(aliquotSum > value)
    return 'abundant'
  else if (aliquotSum < value)
    return 'deficient'
  else
    return 'perfect'
}
