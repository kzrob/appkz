const calc = document.getElementById("calc")

const buttons = []
const buttonMap = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "=", "+"],
    ["C"]
]
const keyMap = {
    ["Backspace"]: () => {
        input.value = input.value.substring(0, input.value.length-1)
    }
}

function createRow(parent) {
    let div = document.createElement("div")
    div.style.display = "flex"
    div.style.flexDirection = "row"
    div.style.justifyContent = "left"
    div.style.flex = 1
    
    if (parent) {parent.appendChild(div)}
    return div
}

function createButton(parent, text) {
    buttons[text] = document.createElement("button")
    buttons[text].className = "opButton" //some code after this will change class to numButton for nums
    buttons[text].textContent = text

    if (parent) {parent.appendChild(buttons[text])}
    return buttons[text]
}

//create the input row
const input = document.createElement("input")
input.readOnly = "true"
input.style.backgroundColor = "rgb(50,50,50)"
input.style.color = "rgb(255,255,255)"
input.style.textAlign = "right"
input.style.fontSize = "60px"
input.style.width = "100%"
input.style.height = "100%"
input.style.borderRadius = "24px"

const row = []
row["text"] = createRow(calc)
row["text"].appendChild(input)

//create all the buttons
for (let i=1; i<=buttonMap.length; i++) {
    row[i] = createRow(calc)
    
    for (let col=0; col<=buttonMap[i-1].length-1; col++) {
        createButton(row[i], buttonMap[i-1][col])
    }
}

//style and add functions to numerical buttons
for (let i=0; i<=9; i++) {
    keyMap[i] = ()=>{input.value += i}

    buttons[i].className = "numButton"
    buttons[i].addEventListener("click", ()=>{input.value += i})
}

//add keybinds for keymap
document.addEventListener("keydown", (key) => {
    if (keyMap[key.key]) {
        keyMap[key.key]();
    }
})