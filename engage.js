
// ========= JUNK 
	const sayHi = function(name) {
		console.log("Hi, " + name + "!");
	};

	const dotCycle = function() {
		summonDot();
		setTimeout(function() {
			bannishDot(); 
		}, 3000);
	}

	const bannishDot = function() {
		let dot = document.querySelector("#dot-1");
		heroBox.removeChild(dot);
	}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let speed = 1500;

const directions = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

let vector = 0;
let direction = "";
let count = 0;
let maxQuestions = 5;

const summonDot = function() {

	let direct = function() {
		let vector = getRandomInt(12);
		let direction = directions[vector];
		console.log(direction);

		const makeDot = function() {

			let dot = document.createElement("div");
			dot.innerText = ("Why?");
			dot.classList.add("dot");
			count += 1;
			console.log("count: " + count);
			dot.setAttribute("id","query-" + count);
			dot.classList.add(direction);
			heroBox.appendChild(dot);

			declutter();
		}
		makeDot();
	}
	direct();
}


const engage = setInterval(summonDot, speed);


const disengage = function() { 
	clearInterval(engage); 
}

const declutter = function() {
	
	// assess density
	if (count > maxQuestions) {  
		// determine how many children may live  
		let cutoff = count-maxQuestions;  
		// find the superannuated child   
		let ruffian = document.querySelector("#query-" + cutoff);
		// log the id of that element (for testing during dev)
		// console.log("#query-" + cutoff);
		// check the 
		console.log("ruffian: " + ruffian);
		heroBox.removeChild(ruffian);
	}

}






// Make a dot    ✓
// Make it appear and disappear    ✓
// Create Lifecycle    ✓
// Make it move toward the edge of the screen    ✓
// Randomly assign direction    ✓
// Make multiple dots    ✓
// Create working start and stop functions
// get rid of dots
// Grow dots through lifecycle
// Create dot count variable control
// Create speed variable control
// Create frequency variable control
// Make question array
// Replace dots with questions
// Randomly grab questions
// Polish the type










