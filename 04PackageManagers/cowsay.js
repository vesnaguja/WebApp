// Cowsay

const cowsay = require("cowsay");

const printCowWords = text => {
	console.log(cowsay.say({
		text : text,
		e : "oO",
		T : "U "		
	}));
	
}

const text = "Hello World";
printCowWords(text);


// or cowsay.think()

