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

/**
 * Converts transistor colors to a number
 * 
 * @param colors Array of different color names
 * @returns The number represented by the colors
 */
export function decodedValue(colors: string[]): number {
  if(colors.length < 2)
    return 0

  return mapping[colors[0]] * 10 + mapping[colors[1]]
}
