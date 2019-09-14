function vokal(str) {
	var vokal = 'dana';
	var jumlah = 0;
	for (var x = 0; x < str.length; x++) {
		if (vokal.indexOf(str[x]) !== -1) {
			jumlah++;
		}
	}
	return jumlah;
}
console.log(vokal('bandanadana'));