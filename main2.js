//LIB TO BE SET OF IMGS LATER
let lives = 8
let lib = [1, 2, 1, 2, 3, 3, 4, 4]

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
    if (isBox) {
      e.target.classList.add("clicked")

      let clickedTwo = document.querySelectorAll(".clicked")
      //IF 2 BOXES ARE CLICKED CHECK IF THEY MATCH
      if (clickedTwo.length === 2) {
        //CHECK IF BELOW MATCHES

        console.log(clickedTwo[0].id)
        console.log(clickedTwo[1].id)
        if (clickedTwo[0].id == clickedTwo[1].id) {
          clickedTwo[0].classList.add("match")
          clickedTwo[1].classList.add("match")
        }

        // if(clickedTwo[0].innerText)
      } else if (
        //IF THEY DONT MATCH RUN THIS
        // document.querySelectorAll(".clicked").length > 2
        clickedTwo.length === 2 &&
        clickedTwo[0].id !== clickedTwo[1].id
      ) {
        console.log(match)
        let test = document.querySelectorAll(".clicked")
        //FOR LOOP TO REMOVE CLICKED CLASS FROM ALL
        for (let i = 0; i < test.length; i++) {
          test[i].classList.remove("clicked")
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

function changeColor(selection) {
  selection.style.backgroundColor = "red"
}
