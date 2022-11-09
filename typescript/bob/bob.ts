const UPPER_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function isAllCaps(message: string): boolean {
  let letterFound = false

  // It doesn't consider a sentence with no letters "all caps," which makes an edge case for which we must account
  for(let i=0; i<message.length; i++) {
    if(UPPER_LETTERS.indexOf(message[i]) != -1) {
      letterFound = true
    }
  }

  return message === message.toUpperCase() && letterFound
}

function isQuestion(message: string): boolean {
  return message[message.length-1] == "?"
}

export function hey(message: string): string {
  message = message.trim()

  if(message == "") {
    return "Fine. Be that way!"
  } else if(isAllCaps(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!"
  } else if(isQuestion(message)) {
    return "Sure."
  } else if(isAllCaps(message)) {
    return "Whoa, chill out!"
  }

  return "Whatever."
}
