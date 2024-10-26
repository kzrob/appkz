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
    ["."]: () => updateInput(input.value + "."),
    ["AC"]: () => updateInput(input.value.substring(0, input.value.length-1)),
    ["CE"]: () => updateInput(""),
}

const keyMap = {
    ["Backspace"]: buttonFunctionMap["AC"],
    ["C"]: buttonFunctionMap["CE"],
    ["c"]: buttonFunctionMap["CE"],
    ["X"]: buttonFunctionMap["*"],
    ["x"]: buttonFunctionMap["*"],
}

const rows = []     //the "physical" rows, rows[i] = createRow()
const buttons = {}  //the "physical" buttons, buttons["str"] = createButton()

//create the input row
const input = document.createElement("input")
input.className = "inputBox"
input.readOnly = "true"
rows[0] = createRow(calc)
rows[0].appendChild(input)

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
    
    buttons[i].addEventListener("click", () => updateInput(input.value += i))
    keyMap[i] = () => updateInput(input.value + i)
}

//add keybinds for keymap
document.addEventListener("keydown", (key) => {
    if (keyMap[key.key]) {
        keyMap[key.key]()
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

function updateInput(newValue) {
    //regex: digit.digit or digit
    input.value = newValue.match(/(\d*\.?\d+|[+\-*/])/g)
    //input.value = newValue.match(/(\d+\.\d+)|(\d+)/)
}