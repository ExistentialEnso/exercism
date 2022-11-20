const GIFTS = [
  "nothing",
  "a Partridge in a Pear Tree",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming"
]

const ADJ = [
  "zeroth",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth"
]

export function reciteDay(day: number) {
  let output = `On the ${ADJ[day]} day of Christmas my true love gave to me: `

  while(day > 0) {
    output += GIFTS[day]

    if(day === 2) {
      output += ", and "
    } else if(day > 2) {
      output += ", "
    }

    day--
  }

  output += ".\n"

  return output
}

export function recite(minDay: number, maxDay: number) {
  let output = ""

  for(let i=minDay; i<=maxDay; i++) {
    output += reciteDay(i)
  }

  return output
}
