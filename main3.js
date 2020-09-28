//LIB TO BE SET OF IMGS LATER
let lives = 8
let lib = [1, 2, 1, 2]

//NEW LIB WITH OBJECTS
let lib2 = [
  { id: 1, icon: `<i class="fa fa-ambulance" id="icon"></i>` },
  { id: 2, icon: `<i class="fa fa-500px" id="icon"></i>` },
  { id: 3, icon: `<i class="fa fa-anchor" id="icon"></i>` },
  { id: 1, icon: `<i class="fa fa-ambulance" id="icon"></i>` },
  { id: 2, icon: `<i class="fa fa-500px" id="icon"></i>` },
  { id: 3, icon: `<i class="fa fa-anchor" id="icon"></i>` },
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

let htmlString = []

let isMatch = false

let els = []
let sel = []
let matchedBoxes = 0

shuffledLib.map((item) => {
  //if they dont match hide cards again if they do, remain shown]

  //create html string from shuffled lib item

  let div = document.createElement("div")
  div.id = `box${item.id}`
  // div.setAttribute("href", `#icon${item}`)
  // div.innerHTML = `<h1 id="icon${item}" class="">${item}</h1>`
  // div.innerHTML = `${item.icon}`

  div.classList.add("box")
  document.querySelector(".container").appendChild(div)

  //add event listener to each box that will check if sel1 and sel2 match
  div.addEventListener("click", function (e) {})
})

function flipCard() {
  let cardId = this.id
  els.push(lib2[cardId].name)
  sel.push(cardId)
  this.innerHTML = 
}

function checkIfMatch() {
  if (sel1 === sel2) {
    return true
  }
}

//   //CREATE ELEMENT IN HTML
//   let div = document.createElement("div")
//   div.id = `box${item}`
//   div.innerHTML = `<h1 class="hidden">${item}</h1>`
//   div.classList.add("box")
//   document.querySelector(".container").appendChild(div)
//   //ADDEVENT LISTENER FOR ALL ELEMENTS
//   div.addEventListener("click", function (e) {
//     //NEED TO CHECK IF ITEMS CLICKED MATCH
//     let isBox = e.target.classList.contains("box")
//     //IF CLICKED INSIDE BOX ADD CLICKED CLASS
//     if (isBox) {
//       e.target.classList.add("clicked")
//     }
//     let clickedTwo = document.querySelectorAll(".clicked")
//     //IF 2 BOXES ARE CLICKED CHECK IF THEY MATCH
//     if (clickedTwo.length === 2) {
//       //CHECK IF BELOW MATCHES
//       match = clickedTwo[0].id == clickedTwo[1].id
//       console.log(clickedTwo[0].id)
//       console.log(clickedTwo[1].id)
//       if (match) {
//         clickedTwo[0].classList.add("match")
//         clickedTwo[1].classList.add("match")
//       }

//       // if(clickedTwo[0].innerText)
//     } else if (
//       //IF THEY DONT MATCH RUN THIS
//       document.querySelectorAll(".clicked").length > 2
//     ) {
//       console.log(match)
//       let test = document.querySelectorAll(".clicked")
//       //FOR LOOP TO REMOVE CLICKED CLASS FROM ALL
//       for (let i = 0; i < test.length; i++) {
//         test[i].classList.remove("clicked")
//       }
//     }
//   })
// })

//CLICK 2 BOXES
//CHECK IF CLICKED
//ADD CLICKED
//MATCH INNERTEXT
//IF CLICKED TRUE

function changeColor(selection) {
  selection.style.backgroundColor = "red"
}
