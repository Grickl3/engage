
// ========= JUNK 
	const sayHi = function(name) {
		console.log("Hi, " + name + "!");
	};


const makeDot = function() {

	let dot = document.createElement("div");
	dot.setAttribute("id","dot-1");
	dot.classList.add("dot");
	heroBox.appendChild(dot);
}

const summonDot = function() {
	makeDot();
}

const bannishDot = function() {
	let dot = document.querySelector("#dot-1");
	heroBox.removeChild(dot);
}

// Make a dot    ✓
// Make it appear and disappear
// Create Lifecycle
// Make it move toward the edge of the screen
// Make multiple dots
// Randomly assign direction
// Create dot count variable control
// Create speed variable control
// Create frequency variable control
// Make question array
// Randomly grab questions
// Polish the type