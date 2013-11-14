//comments for JSLint to stop throwing warnings
/*global window */
/*global document */

window.onload = function(){
	//correct placement of "use strict" according to Crockford:
	//see: http://stackoverflow.com/questions/4462478/jslint-is-suddenly-reporting-use-the-function-form-of-use-strict
	//and: http://www.yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/ by Crockford
	"use strict";
	
	//creates random number for guessing game
	var secret = Math.floor(Math.random() * 101); // Detta tal behöver bytas ut mot ett slumpat tal.
	
	var guess = function(number){
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		
		//debugging
		console.log(secret + " secret");
		console.log(number + " number");
		
		//makes sure user gives correct input
		if (isNaN(number) || number === null){
			return [false, "Ange ett korrekt tal inom intervallet, endast siffror."];
		}
		
		else{
			//runs if user's input is okay
			if (number < 0 || number > 100){
				return [false, "Talet är utanför intervallet 0 - 100"];
			}
			else if (secret === number){
				return [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."];
			}
			else if (secret > number){
				return [false, "Det hemliga talet är högre!"];
			}
			else if (secret < number){
				return [false, "Det hemliga talet är lägre!"];
			}
		}
	};
	
	// Kod för att hantera utskrift guess inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");
	
	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.
		
		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.
		
		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
		
	});
};
