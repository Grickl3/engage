
// ========= JUNK 
	const sayHi = function(name) {
		console.log("Hi, " + name + "!");
	};



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const directions = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

let vector = 0;
let direction = "";
let dots = [];

const summonDot = function() {

	let direct = function() {
		let vector = getRandomInt(12);
		let direction = directions[vector];
		console.log(direction);

		const makeDot = function() {

			let dot = document.createElement("div");
			dot.setAttribute("id","dot-1");
			dot.classList.add("dot");
			dot.classList.add(direction);
			heroBox.appendChild(dot);
		}

		makeDot();
	}

	direct();
	
}

const bannishDot = function() {
	let dot = document.querySelector("#dot-1");
	heroBox.removeChild(dot);
}

const dotCycle = function() {
	summonDot();
	setTimeout(function() {
		bannishDot(); 
	}, 3000);
}


// Make a dot    ✓
// Make it appear and disappear    ✓
// Create Lifecycle    ✓
// Make it move toward the edge of the screen    ✓
// Randomly assign direction    ✓
// Make multiple dots
// Grow dots through lifecycle
// Create dot count variable control
// Create speed variable control
// Create frequency variable control
// Make question array
// Replace dots with questions
// Randomly grab questions
// Polish the type










