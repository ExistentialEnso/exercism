package luhn

import ("strings"; "strconv")

func ReverseString(input string) (result string) {
	for _, x := range input {
		result = string(x) + result
	}
	return
}

func Valid(id string) bool {
	id = ReverseString(strings.ReplaceAll(id, " ", ""))

	if len(id) < 2 {
		return false
	}

	checksum := 0

	for i := 0; i < len(id); i++ {
		digit, error := strconv.Atoi(string(id[i]))

		if error != nil {
			return false
		}

		if i % 2 == 1 {
			digit *= 2

			if(digit > 9) {
				digit -= 9
			}
		}

		checksum += digit
	}

	if(checksum % 10 == 0) {
		return true
	} else {
		return false
	}
}
