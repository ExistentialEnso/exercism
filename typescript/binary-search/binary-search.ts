// Recursive function for doing a binary search
function searchIteration(haystack: number[], needle: number, indexPadding: number): number | never {
  if(haystack.length == 0) {
    throw new Error('Value not in array')
  }

  const middleIndex = Math.floor(haystack.length/2)

  if(haystack[middleIndex] == needle) {
    return middleIndex + indexPadding
  } else if(haystack[middleIndex] > needle) {
    return searchIteration(haystack.slice(0, middleIndex), needle, indexPadding)
  } else {
    if(haystack.length == middleIndex + 1) {
      throw new Error('Value not in array')
    }

    return searchIteration(haystack.slice(middleIndex), needle, indexPadding + middleIndex)
  }
}

export function find(haystack: number[], needle: number): number | never {
  return searchIteration(haystack, needle, 0)
}
