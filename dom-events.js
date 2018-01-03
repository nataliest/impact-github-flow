const greetingEl = document.getElementById("greeting")
const astrosEl = document.getElementById("astros")

window.onload = () => {
  greetingEl.innerText = "oh, hey there!"
  renderAstros()
}

renderAstros = () => {
  const astros = peopleInSpace["people"]
  let peopleEls = astros.map((a) => {
    let name = a["name"]
    return `<li>${name}</li>`
  })
  astrosEl.innerHTML = `<ul>${peopleEls.join("")}</ul>`
}

 // create a function that alerts "these are all the astronauts!" when the title element is clicked.
var title = document.getElementsByClassName("title")[1]
title.onclick = () => {
	alert("these are all the astronauts!")
}
 // log to the console the client's x coordinate of their mouse as they move it around the window.
// window.addEventListener("mousemove", function (event) {
// 	console.log(event.clientX);
// });

// function showCoords(event) {
//     var x = event.clientX;
//     // var y = event.clientY;
//     var coor = "X coords: " + x 
//     // + ", Y coords: " + y;
//     console.log(coor);
// }

// make an element that displays the most recent key pressed in the DOM
// window.addEventListener('keypress', (event) => {
//   const keyName = event.key;

//   var text = 'keypress event\n\n' + 'key: ' + keyName;

//   document.getElementById("demo").innerHTML = text;
// });

window.addEventListener("keyup", function (event) {
  const keyName = event.key;

  var text = 'keypress event\n\n' + 'key: ' + keyName;

  document.getElementById("demo").innerHTML = text;
});

// create a text input element. When a user clicks on the text field to input, log the input element to console.
var userInput = document.getElementById("i1");
userInput.addEventListener("click", function (event) {
	console.log(userInput.value)
});
// when a user clicks away from the input, log ("bye") to the console.
document.addEventListener("click", function (event) {
	if (event.target != userInput) {
		console.log("bye")
	}
	
});
// wrap the input element with a form element.

// when the form is submitted, render the client's inputted text to the DOM
document.addEventListener("submit", function (event) {
	event.preventDefault()
	document.getElementById("demo2").innerHTML = userInput.value;
	userInput.value = ""
});
// HINT: look into event.preventDefault()
