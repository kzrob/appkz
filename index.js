const calc = document.getElementById("calc")

const buttonMap = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
    ["C"]
]
const keyMap = {
    ["Backspace"]: () => input.value = input.value.substring(0, input.value.length-1),
    ["C"]: () => input.value = "",
    ["c"]: () => input.value = "",
}

//create the input row
const input = document.createElement("input")
input.className = "inputBox"
input.readOnly = "true"

const rows = []
rows["input"] = createRow(calc)
rows["input"].appendChild(input)

//create all the buttons
const buttons = []
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
    
    buttons[i].addEventListener("click", () => input.value += i)
    keyMap[i] = () => input.value += i
}

//add keybinds for keymap
document.addEventListener("keydown", (key) => {
    if (keyMap[key.key]) {
        keyMap[key.key]()
    }
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
