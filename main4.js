//LIB TO BE SET OF IMGS LATER
let lives = 8
let lib = [1, 2, 1, 2, 3, 3, 4, 4]
let matchedBoxes = 0

//NEW LIB WITH OBJECTS
// let lib2 = [
//   { id: 1, icon: `<i class="fab fa-500px"></i>` },
//   { id: 2, icon: `<i class="fab fa-500px"></i>` },
// ]

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
let match = false

let clicked = []

shuffledLib.map(function (item) {
  //CREATE ELEMENT IN HTML
  let div = document.createElement("div")
  div.id = `box${item}`
  div.innerHTML = `<h1 class="hidden">${item}</h1>`
  div.classList.add("box")
  document.querySelector(".container").appendChild(div)
  //ADDEVENT LISTENER FOR ALL ELEMENTS
  div.addEventListener("click", function (e) {
    //NEED TO CHECK IF ITEMS CLICKED MATCH
    let isBox = e.target.classList.contains("box")
    //IF CLICKED INSIDE BOX ADD CLICKED CLASS

    if (
      isBox &&
      !e.target.classList.contains("match") &&
      !e.target.classList.contains("clicked")
    ) {
      e.target.classList.add("clicked")
      clicked.push(e.target)
      if (clicked[0].id === clicked[1].id && clicked.length === 2) {
        clicked[0].classList.add("match")
        clicked[1].classList.add("match")
        clicked[0].classList.remove("clicked")
        clicked[1].classList.remove("clicked")
        clicked = []
        matchedBoxes += 2
        if (matchedBoxes === lib.length) {
          alert("win condition")
        }
      } else if (clicked[0] !== clicked[1] && clicked.length === 2) {
        clicked[0].classList.remove("clicked")
        clicked[1].classList.remove("clicked")
        console.log(clicked)
        lives--
        clicked = []
        if (lives === 0) {
          alert("lose condition")
        }
      }
    }
  })
})
//CLICK 2 BOXES
//CHECK IF CLICKED
//ADD CLICKED
//MATCH INNERTEXT
//IF CLICKED TRUE
