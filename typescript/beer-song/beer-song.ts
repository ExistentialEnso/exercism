export function verse(index: number): string {
  if(index === 2) {
    return `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`
  } else if(index === 1) {
    return `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
  } else if(index === 0) {
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
  }

  return `${index} bottles of beer on the wall, ${index} bottles of beer.
Take one down and pass it around, ${index-1} bottles of beer on the wall.
`
}

export function sing(
  initialBottlesCount?: number,
  takeDownCount?: number
): string {
  let song = ""

  for(let i = initialBottlesCount || 99; i >= (takeDownCount || 0); i--) {
    // It wants an extra line break between each that, if passed back in verse(), causes failing unit tests
    if(song !== "")
      song += "\n"

    song += verse(i)
  }

  return song
}
