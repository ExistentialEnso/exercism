const digitsOnly = new RegExp(/^([0-9,X,\-]*)$/)

export function isValid(isbn: string): boolean {
  if(!digitsOnly.test(isbn)) {
    return false
  }

  isbn = isbn.replaceAll("-", "")

  if(isbn.length !== 10 || isbn === "")
    return false

  let total = 0
  let factor = 10

  for(let i=0; i<isbn.length; i++) {
    const digit = isbn[i] === "X" ? 10 : parseInt(isbn[i])

    if(digit === 10 && i+1 != isbn.length)
      return false

    total += (digit * factor)

    factor--
  }

  return total % 11 === 0
}
