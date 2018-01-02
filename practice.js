
console.log(peopleInSpace)

const numberOfAstrosInSpace = (data) => {
  //return the number of astronauts in space right now, using the data
  return data.number
}
console.log("number of people in space: ", numberOfAstrosInSpace(peopleInSpace))


const astroNames = (data) => {
  // return an array containing the name strings of the astronauts in space
  let nameArr = data.people.map((obj) => {
  	return obj.name
  })
  return nameArr
}
console.log("names of people in space: ", astroNames(peopleInSpace))


const allInSameCraft = (data) => {
  // return a boolean that specifies whether all astronauts are in the same space craft
  let craftArr = data.people.map((obj) => {
  	return obj.craft
  })
  let checkEl = craftArr[0];
  for (var i = 1; i < craftArr.length; i++) {
  	if (checkEl != craftArr[i]) {
  		return false
  	}
  }
  return true
}
console.log("same craft? ", allInSameCraft(peopleInSpace))


const successfulResponse = (data) => {
  // return a boolean that specifies whether the response from the Open Notify API was successful
  return data.message == "success"
}
console.log("successful response? ", successfulResponse(peopleInSpace))


const wheresJoe = (data) => {
  // return "in space!" if Joe Acaba is in space right now. Otherwise, return "dunno."
  for (var i = 0; i < data.people.length; i++) {
  	if (data.people[i].name == "Joe Acaba") {
  		return "in space!"
  	}
  }
  return "dunno"
}
console.log("where's Joe? ", wheresJoe(peopleInSpace))

// BONUS
// Using your astroNames function, dynamically render each of the astronauts' names to the DOM in an unordered list when the page loads.
