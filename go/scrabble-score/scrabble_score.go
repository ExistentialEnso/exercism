package scrabble

import "strings"

func ArrayContains(array []rune, search rune) bool {
	for _, x := range array {
		if x == search {
			return true
		}
	}

	return false
}

func Score(word string) int {
	score := 0

	for _, x := range strings.ToLower(word) {
		if ArrayContains([]rune {'a','e','i','o','u','l','n','r','s','t'}, x) {
			score++
		} else if ArrayContains([]rune {'d','g'}, x) {
			score += 2
		} else if ArrayContains([]rune {'b','c','m','p'}, x) {
			score += 3
		} else if ArrayContains([]rune {'f','h','v','w','y'}, x) {
			score += 4
		} else if ArrayContains([]rune {'j','x'}, x) {
			score += 8
		} else if ArrayContains([]rune {'q','z'}, x) {
			score += 10
		} else if(x == 'k') {
			score += 5
		}
	}

	return score
}
