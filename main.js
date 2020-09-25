//LIB TO BE SET OF IMGS LATER

let lib = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]

// let arrTest = lib

//SHUFFLE FUNCTION FROM ONLINE
let shuffle = function (array) {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

let shuffledLib = shuffle(lib)
// console.log(shuffledLib)
let htmlString = []
//INJECT BOXES TO HTML
//DISPLAY SHUFFLED ARRAY
shuffledLib.map(function (item) {
  htmlString.push(`<div class="box">${item}</div>`)
  document.querySelector(".container").innerHTML = htmlString.join("")
})

// let randomIndex = Math.floor(Math.random() * lib.length)

// console.dir(randomOrderArr)

//GENERATE SET OF BOXES
//RANDOMIZE SET OF BOXES

//CHANGE COLOR FUNCTION
function changeColor(selection) {
  selection.style.backgroundColor = "red"
}

//BOXES TO LISTEN FOR CLICKS
let selection1 = ""
let selection2 = ""

let containerHTML = document.querySelector(".container")
containerHTML.addEventListener("click", function (e) {
  let selection = ""
  let newSelection = ""
  let isBox = e.target.className.includes("box")
  if (isBox && selection1 === "") {
    // changeColor(selection)
    selection = e.target
    selection1 = selection
    console.log(selection1)
    // if (selection1 == !"") {
    //   let newSelection = e.target
    //   selection2 = newSelection
    // }
  } else if (isBox && selection1 != "") {
    newSelection = e.target
    selection2 = newSelection
    console.log(selection2)
  }
  if (isBox && selection1.innerText === selection2.innerText) {
    changeColor(selection1)
    changeColor(selection2)
  }

  // if (selection1 !== "") {
  //   let newSelection = e.target
  //   selection2 = newSelection
  // }
})

//IF MATCHED
//IF NOT MATCHED

// lib.length = lib.length - 1
// console.log(lib)
