package blackjack

import "strings"

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch strings.ToLower(card) {
	case "ace":
		return 11
	case "king":
		return 10
	case "queen":
		return 10
	case "jack":
		return 10
	case "ten":
		return 10
	case "nine":
		return 9
	case "eight":
		return 8
	case "seven":
		return 7
	case "six":
		return 6
	case "five":
		return 5
	case "four":
		return 4
	case "three":
		return 3
	case "two":
		return 2
	}

	return 0
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	playerValue := ParseCard(card1) + ParseCard(card2)
	dealerValue := ParseCard(dealerCard)

	if card1 == "ace" && card2 == "ace" {
		return "P"
	} else if playerValue == 21 {
		if dealerValue < 10 {
			return "W"
		} else {
			return "S"
		}
	} else if playerValue >= 17 {
		return "S"
	} else if playerValue <= 11 {
		return "H"
	} else {
		if dealerValue >= 7 {
			return "H"
		} else {
			return "S"
		}
	}
}
