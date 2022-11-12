/**
 * Converts a number into a list of commands based on its binary representation
 */
export function commands(input: number): string[] {
  let value = parseInt(input.toString(2))
  const returnedCommands = []

  if(value % 2 == 1) {
    returnedCommands.push('wink')
  }

  value = Math.floor(value / 10)

  if(value % 2 == 1) {
    returnedCommands.push('double blink')
  }

  value = Math.floor(value / 10)

  if(value % 2 == 1) {
    returnedCommands.push('close your eyes')
  }

  value = Math.floor(value / 10)

  if(value % 2 == 1) {
    returnedCommands.push('jump')
  }

  value = Math.floor(value / 10)

  if(value % 2 == 1) {
    returnedCommands.reverse()
  }

  return returnedCommands
}
