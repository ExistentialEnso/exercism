const VOWEL_SOUNDS_1 = ['a', 'e', 'i', 'o', 'u']
const VOWEL_SOUNDS_2 = ['yt', 'xr']

const CONS_SOUNDS_2 = ['th', 'ph', 'ch', 'qu']
const CONS_SOUNDS_3 = ['thr', 'sch']

export function translate(english: string): string {
  return english.split(" ").map(x => translateWord(x)).join(" ")
}

export function translateWord(word: string): string {
  word = word.toLowerCase()

  if(VOWEL_SOUNDS_1.indexOf(word[0]) > -1 || VOWEL_SOUNDS_2.indexOf(word.slice(0,2)) > -1) {
    return word + "ay"
  }

  let ending = ""
  if(CONS_SOUNDS_3.indexOf(word.slice(0,3)) > -1) {
    ending = word.slice(0,3)
    word = word.slice(3)
  } else if(CONS_SOUNDS_2.indexOf(word.slice(0,2)) > -1) {
    ending = word.slice(0,2)
    word = word.slice(2)
  } else {
    ending = word.slice(0,1)
    word = word.slice(1)
  }

  if(word.slice(0,2) === "qu") {
    ending += "qu"
    word = word.slice(2)
  }

  ending += "ay"

  return word + ending
}
