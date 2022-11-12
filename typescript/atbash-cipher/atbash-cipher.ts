const forwards = "abcdefghijklmnopqrstuvwxyz"
const backwards = "zyxwvutsrqponmlkjihgfedcba"

const otherChars = "1234567890"

export function encode(plainText: string): string {
  plainText = plainText.toLowerCase()
  let response = ""

  for(let i=0; i<plainText.length; i++) {
    if(forwards.indexOf(plainText[i]) > -1) {
      response += backwards[forwards.indexOf(plainText[i])]
    }

    if(otherChars.indexOf(plainText[i]) > -1) {
      response += plainText[i]
    }

    if(response.length % 6 === 5 && i+1 < plainText.length) {
      response += " "
    }
  }

  return response
}

export function decode(cipherText: string): string {
  cipherText = cipherText.toLowerCase()
  let response = ""

  for(let i=0; i<cipherText.length; i++) {
    if(forwards.indexOf(cipherText[i]) > -1) {
      response += backwards[forwards.indexOf(cipherText[i])]
    }

    if(otherChars.indexOf(cipherText[i]) > -1) {
      response += cipherText[i]
    }
  }

  return response
}
