export function sum(multiples: number[], limit: number) {
  let total = 0
  let matched = new Map<number, boolean>()

  for(const multiple of multiples) {
    let value = multiple

    while(value > 0 && value < limit) {
      if(!matched.get(value)) {
        total += value
        matched.set(value, true)
      }

      value += multiple
    }
  }

  return total
}
