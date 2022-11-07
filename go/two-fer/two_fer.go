// Library that returns a string based on the name passed to it.
package twofer

// Returns a string about sharing
func ShareWith(name string) string {
	// Fall back to "you" if nothing is passed as a name
	nameDisplay := name
	if name == "" {
		nameDisplay = "you"
	}

	return "One for " + nameDisplay + ", one for me." 
}
