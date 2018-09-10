package basename

import "strings"

// Return the file component of a path, without extension
func basename(path string) string {
	return impl2(path)
}

func impl2(path string) string {
	// scroll to last '/'
	file := path
	for i := len(path) - 1; i > -1 ; i-- {
		if path[i] == '/' {
			file = path[i+1:]
			break
		}
	}

	// find last '.'
	for j := len(file) - 1 ; j > -1 ; j-- {
		if file[j] == '.' && j > 0{
			return file[:j]
		}
	}
	return file
}

func impl1(path string) string {
	components := strings.Split(path, "/")
	file := components[len(components)-1]

	if !strings.Contains(file, ".") {
		return file
	}
	extensions := strings.Split(file, ".")
	return strings.Join(extensions[:len(extensions)-1], ".")
}
