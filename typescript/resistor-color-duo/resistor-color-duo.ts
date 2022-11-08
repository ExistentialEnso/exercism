const mapping: any = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedValue(colors: string[]) {
  if(colors.length < 2)
    return 0

  return mapping[colors[0]] * 10 + mapping[colors[1]]
}
