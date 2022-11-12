export function convert(input: number): string {
  let response = ""

  if(input%3 === 0)
    response += "Pling"

  if(input%5 === 0)
    response += "Plang"

  if(input%7 === 0)
    response += "Plong"

  return response === "" ? input.toString() : response
}
