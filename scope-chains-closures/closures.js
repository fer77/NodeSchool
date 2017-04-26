function foo() {
	var bar;
	quux = 'some value.'
	function zip() {
		var quux = 'a diffrent value.';
		bar = true;
	}
	return zip;
}