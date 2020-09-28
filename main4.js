//LIB TO BE SET OF IMGS LATER
let lives = 8
let lib = [1, 2, 1, 2, 3, 3, 4, 4]
let matchedBoxes = 0

//NEW LIB WITH OBJECTS
let lib2 = [
  {
    id: 1,
    icon: `<img src="https://octodex.github.com/images/Terracottocat_Single.png" alt="">`,
  },
  {
    id: 2,
    icon: `<img src="https://octodex.github.com/images/luchadortocat.png" alt="">`,
  },
  {
    id: 3,
    icon: `<img src="https://octodex.github.com/images/vinyltocat.png" alt="">`,
  },
  {
    id: 4,
    icon: `<img src="https://octodex.github.com/images/inflatocat.png" alt="">`,
  },
  {
    id: 1,
    icon: `<img src="https://octodex.github.com/images/Terracottocat_Single.png" alt="">`,
  },
  {
    id: 2,
    icon: `<img src="https://octodex.github.com/images/luchadortocat.png" alt="">`,
  },
  {
    id: 3,
    icon: `<img src="https://octodex.github.com/images/vinyltocat.png" alt="">`,
  },
  {
    id: 4,
    icon: `<img src="https://octodex.github.com/images/inflatocat.png" alt="">`,
  },
  {
    id: 5,
    icon: `<img src="https://octodex.github.com/images/yaktocat.png" alt="">`,
  },
  {
    id: 5,
    icon: `<img src="https://octodex.github.com/images/yaktocat.png" alt="">`,
  },
  {
    id: 6,
    icon: `<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="">`,
  },
  {
    id: 6,
    icon: `<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="">`,
  },
  {
    id: 7,
    icon: `<img src="https://octodex.github.com/images/Robotocat.png" alt="">`,
  },
  {
    id: 7,
    icon: `<img src="https://octodex.github.com/images/Robotocat.png" alt="">`,
  },
  {
    id: 8,
    icon: `<img src="https://octodex.github.com/images/spidertocat.png" alt="">`,
  },
  {
    id: 8,
    icon: `<img src="https://octodex.github.com/images/spidertocat.png" alt="">`,
  },
]

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

let shuffledLib = shuffle(lib2)
// console.log(shuffledLib)
let htmlString = []
//INJECT BOXES TO HTML
//DISPLAY SHUFFLED ARRAY
let match = false

let clicked = []

let icon = []

shuffledLib.map(function (item) {
  //CREATE ELEMENT IN HTML
  let div = document.createElement("div")
  div.id = `box${item.id}`
  // div.innerHTML = `<h1 class="hidden">${item}</h1>`
  div.setAttribute("href", `${item.icon}`)
  div.classList.add("box")
  document.querySelector(".container").appendChild(div)
  //ADDEVENT LISTENER FOR ALL ELEMENTS
  div.addEventListener("click", function (e) {
    //NEED TO CHECK IF ITEMS CLICKED MATCH
    let isBox = e.target.classList.contains("box")
    //IF CLICKED INSIDE BOX ADD CLICKED CLASS

    if (isBox && e.target.innerHTML === "") {
      // e.target.classList.add("clicked")
      clicked.push(e.target)
      icon.push(e.target.getAttribute("href"))
      e.target.innerHTML = e.target.getAttribute("href")
      // e.target.innerHTML = icon
      if (clicked[0].id === clicked[1].id && clicked.length === 2) {
        clicked = []
        icon = []
        matchedBoxes += 2
        if (matchedBoxes === lib.length) {
          alert("win condition")
        }
      } else if (clicked[0] !== clicked[1] && clicked.length === 2) {
        // clicked[0].innerHTML = ""
        // clicked[1].innerHTML = ""
        setTimeout(function clear() {
          clicked[0].innerHTML = ""
          clicked[1].innerHTML = ""
          clicked = []
        }, 700)

        lives--
        document.getElementById(
          "lives"
        ).innerHTML = `<h1>Tries Left: ${lives}</h1>`
        icon = []
        if (lives === 0) {
          loseScreen()
        }
      }
    }
  })
})

function resetIcons() {
  clicked[0].innerHTML = ""
  clicked[1].innerHTML = ""
}

function loseScreen() {
  document.querySelector(
    "body"
  ).innerHTML = `<div class="center"><h1>You Lose</h1></div>`
}
//CLICK 2 BOXES
//CHECK IF CLICKED
//ADD CLICKED
//MATCH INNERTEXT
//IF CLICKED TRUE
