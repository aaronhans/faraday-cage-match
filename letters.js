exports.letterScore = function(string) {
	var score = 0;
	var localString = string.toLowerCase();
	// just to be safe
	var numberize1 = /[eaionrtlsu]/g;
	var numberize2 = /[dg]/g;
	var numberize3 = /[bcmp]/g;
	var numberize4 = /[fhvwy]/g;
	var numberize5 = /[k]/g;
	var numberize8 = /[jx]/g;
	var numberize10 = /[qz]/g;
	var numberizeX = /[^a-z]/g;
	// let's use regex to turn letters into their scrabble scores
	var newString = 
		localString.replace(numberizeX, "")
			.replace(numberize1, "1 ")
			.replace(numberize2, "2 ")
			.replace(numberize3, "3 ")
			.replace(numberize4, "4 ")
			.replace(numberize5, "5 ")
			.replace(numberize8, "8 ")
			.replace(numberize10, "10 ");
	newString = newString.trim();
	//get rid of any trailing whitespace, which js really doesn't like to add
	letters = newString.split(' '); 
	console.log(letters);
	// turn into an array
	var totalScore = 0;
	for (var i = 0; i < letters.length; i++) {
		var number = parseInt(letters[i], 10);
		if (number != number) {
			//then it's NaN, don't add it
		}
		else {
			totalScore = totalScore + number;
		}
    	
	}
	return totalScore;
}

exports.letterSort = function(string) {
	var sortArray = string.split(''); 
	sortArray.sort();
	var sortedString = sortArray.join('');
	return sortedString;
}