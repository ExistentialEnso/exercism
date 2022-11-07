// Package weather for formatting forecast information.
package weather

// CurrentCondition - the current condition of the weather.
var CurrentCondition string

// CurrentLocation - the location for which we are viewing weather.
var CurrentLocation string

// Forecast returns a human-friendly forecast from a supplied city and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
