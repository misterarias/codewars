package basename

import (
	"testing"
)

func TestBasename(t *testing.T) {
	var tests = []struct {
		path		string
		want		string
	}{
		{"", ""},
		{"/", ""},
		{"file", "file"},
		{"file.png", "file"},
		{"/path/to/file", "file"},
		{"/path/to/file.jpg", "file"},
		{"/path/to/super.file.jpg", "super.file"},
		{"/path/to/.dotfile", ".dotfile"},
	}

	for _, test := range(tests) {
		if got := basename(test.path) ; got != test.want {
			t.Errorf("basename('%s') = '%s', expected '%s'.",
				test.path, got, test.want)
		}
	}
}

func BenchmarkImpl1(b *testing.B) {
	for i := 0 ; i < b.N ; i++ {
		impl1("/path/to/biggest/file.ever.jpg")
	}
}
func BenchmarkImpl2(b *testing.B) {
	for i := 0 ; i < b.N ; i++ {
		impl2("/path/to/biggest/file.ever.jpg")
	}
}
