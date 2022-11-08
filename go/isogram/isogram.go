package isogram
import "strings"

/**
* Determines whether a word is an isogram (doesn't contain repeating letters).
*/
func IsIsogram(word string) bool {
	alreadySeen := ""

	for _, x := range strings.ToLower(word) {
		// Hyphens and spaces don't count
		if x == ' ' || x == '-' {
			continue
		}

		// See if we've run into two of the same character
		if strings.Contains(alreadySeen, string(x)) {
			return false
		}

		alreadySeen += string(x)
	}

	// If we survived to this point, it's an isogram!
	return true
}
