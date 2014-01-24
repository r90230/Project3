//John Hereshko
// SDI 1401
// Project 3
// January 23, 2014

var 	myGusto = true,
	myHealth = 1000
	myVolts = 10000,
	myTitle = "Half Demon",
	myDemons = ["Big Boss", "Ryzaragan", "Jono"]; // Global Variables
	
var party = {						       // Json Database
        "possessors": [
                {
                "name": "Jay Valent",
                "element": "lightning",
                "strength": 1472
                 },
                 {
                "name": "Big Boss",
                "element": "earth",
                "strength": 890
                },
                {
                "name": "Ryzaragan",	
                "element": "fire",	
                "strength": 890	
                },
                {
                "name": "Jono",
                "element": "dark",
                "strength": 850
                }
      ]
};

var howShocking = function(volts, hp){				// Number Function, Argument: Number
	while (hp > 100){				// Nested Loop
			console.log("They're attacking back! I only have " + hp + " Health left!");
			hp -= 100;
			while (volts > 1000){
		console.log("I shocked another one! I have " + volts + " volts of electricity left to fight with!")	
		volts -= 500;
		
		};
	};

	return volts						// Return Number
};

var myTeam = function(demons){					// Array Function, Argument: Array
	for (i = 0; i < demons.length; i++){
		console.log("One of the demons I have available to fight is " + demons[i] + ".")
	};
	return demons						// Return String
};

var thisBattle = function(bravery){				// Boolean Function, Argument: Boolean
	if (bravery === true){
		howShocking(myVolts, myHealth)	
	} else {
		console.log("I don't have the courage to fight these creatures! I must retreat!")
	};
	return bravery;
};

var myPride = function(title){					// String Function, Argument: String
	console.log("I am the " + title + "!");
	return title;
};

var infoCards = function(party){				
	for (i = 0; i < party.possessors.length; i++){
		var thisDemon = party.possessors[i];
		console.log("Name: " + thisDemon.name + ", Element: " + thisDemon.element + ", Power: " + thisDemon.strength)
	};
	
};



var shallWeBegin = confirm("My name is Jay Valent, a half demon tasked with destroying the corrupted demons. I am on my way to attack a group now. Will you help me?");

if (shallWeBegin === true){					// Conditional
	var myGusto = confirm("There's an army of about 70 down there. Am I brave enough to fight them all...?");
	thisBattle(myGusto);					// Nested Conditional
}

console.log("I have other demons at my disposal to help me fight the army!");

myTeam(myDemons); 						// Pulling array info

console.log("I have their information sheets in front of me")

infoCards(party)						// Pulling JSON data

console.log("However, their strength is not quite as strong as my own.");
myPride(myTitle);						// Pulling String Data
