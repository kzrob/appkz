const calc = document.getElementById("calc")

const buttonMap = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
    ["AC", "CE"]
]

const buttonFunctionMap = {
    //digits 0-9 were added with a for loop
    ["+"]: () => console.log("op"),
    ["-"]: () => console.log("op"),
    ["*"]: () => console.log("op"),
    ["/"]: () => console.log("op"),
    ["="]: () => console.log("op"),
    ["."]: () => input.push("."),
    ["AC"]: () => input.pop(),
    ["CE"]: () => input.splice(0, input.length), //use splice so that we can listen to the event
}

const keyMap = {
    ["Backspace"]: buttonFunctionMap["AC"],
    ["C"]: buttonFunctionMap["CE"],
    ["c"]: buttonFunctionMap["CE"],
    ["X"]: buttonFunctionMap["*"],
    ["x"]: buttonFunctionMap["*"],
}

const input = []
const rows = []     //the "physical" rows, rows[i] = createRow()
const buttons = {}  //the "physical" buttons, buttons["str"] = createButton()

//create the input row
const inputBox = document.createElement("input")
inputBox.className = "inputBox"
inputBox.readOnly = true
rows[0] = createRow(calc)
rows[0].appendChild(inputBox)

//create all the buttons
for (let row=1; row<=buttonMap.length; row++) {
    rows[row] = createRow(calc)
    
    for (let i=0; i<=buttonMap[row-1].length-1; i++) {
        let buttonId = buttonMap[row-1][i]
        buttons[buttonId] = createButton(rows[row], buttonId)
    }
}

//style and add functions to numerical buttons
for (let i=0; i<=9; i++) {
    buttons[i].className = "numButton"
    
    buttons[i].addEventListener("click", () => updateInput(inputBox.value += i))
    keyMap[i] = () => input.push(i)
}

//add keybinds for keymap
document.addEventListener("keydown", (event) => {
    if (keyMap[event.key]) {
        keyMap[event.key]()
    }
})

//add click functions for buttonFunctionMap
buttonMap.forEach((row) => {
    row.forEach((buttonString) => {
        buttons[buttonString].addEventListener("click", buttonFunctionMap[buttonString])
    })
})

//FUNCTIONS
function createRow(parent) {
    let div = document.createElement("div")
    div.className = "rows"
    
    if (parent) {parent.appendChild(div)}
    return div
}

function createButton(parent, text) {
    let button = document.createElement("button")
    button.className = "opButton" //some code after this will change class to numButton for nums
    button.textContent = text

    if (parent) {parent.appendChild(button)}
    return button
}

function combineTerms() {
    for (let i=0; i<input.length; i++) {
        let v = input[i]

        //find format where: (a^b)
        let bundledTerm = (input[i-2] == "(") && (input[i+2] == ")")
        
        //exp, mult, div
        if (v == "^" || v == "*" || v == "/") {
            input.splice(i-2, 0, "(")
            input.splice(i+2, 0, ")")
        }
    }
}

//update input box upon editing [input] array
function updateInput() {
    inputBox.value = input.join('')
}

input.push = function() {
    Array.prototype.push.apply(this, arguments)
    updateInput()
}

input.pop = function() {
    Array.prototype.pop.apply(this, arguments)
    updateInput()
}

input.splice = function() {
    Array.prototype.splice.apply(this, arguments)
    updateInput()
}