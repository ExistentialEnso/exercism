const digitsOnly = new RegExp(/^([0-9 ]*)$/)

export function valid(digitString: string): boolean {
  if(!digitsOnly.test(digitString)) {
    return false
  }

  digitString = digitString.replaceAll(" ", "")

  let total = 0
  let shouldDouble = false

  for(let i=digitString.length-1; i>=0; i--) {
    let digit = parseInt(digitString[i])

    if(shouldDouble) {
      digit *= 2

      if(digit > 9)
        digit -= 9
    }

    total += digit

    shouldDouble = !shouldDouble
  }

  return total > 0 && total % 10 === 0
}
