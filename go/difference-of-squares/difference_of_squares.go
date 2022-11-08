package diffsquares

/**
* Square the sum of numbers 1-n, e.g.
*   (1+2+3)^2
*/
func SquareOfSum(n int) int {
	sum := 0

	for i := 1; i <= n; i++ {
		sum += i
	}

	return sum * sum
}

/**
* Sum of the square of numbers 1-n, e.g.
*   (1^2)+(1^3)+(1^4)
*/
func SumOfSquares(n int) int {
	sum := 0

	for i := 1; i <= n; i++ {
		sum += (i * i)
	}

	return sum
}

/**
* Difference between SquareOfSum and SumOfSquares
*/
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
