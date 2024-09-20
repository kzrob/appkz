const topbar = document.createElement("div")
topbar.style.width = "100%"
topbar.style.float = "left"
topbar.style.backgroundColor = "#222299"
document.body.appendChild(topbar)

const main = document.createElement("main")
topbar.appendChild(main)

const title = document.createElement("h1")
title.textContent = "Calculator"
title.style.color = "#FFFFFF"
title.style.textShadow = "4px 4px #000000"
title.style.textAlign = "center"
main.appendChild(title)

function createGrid(parent) {
    let div = document.createElement("div")
    div.style.backgroundColor = "rgb(200,200,200)"
    div.style.outline = "1px solid black"
    div.style.borderRadius = "8px"
    div.style.width = "512px"
    div.style.height = "640px"
    div.style.padding = "16px"
    div.style.marginLeft = "auto"
    div.style.marginRight = "auto"
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.flexWrap = "wrap"
    
    if (parent) {parent.appendChild(div)}
    return div
}

function createRow(parent) {
    let div = document.createElement("div")
    div.style.backgroundColor = "#FFFFFF"
    div.style.display = "flex"
    div.style.flexDirection = "row"
    div.style.flex = 1
    div.style.flexWrap = "wrap"
    
    if (parent) {parent.appendChild(div)}
    return div
}

function createButton(parent, text) {
    let button = document.createElement("button")
    button.style.backgroundColor = "rgb(40,40,40)"
    button.style.color = "rgb(100,100,200)"
    button.style.fontSize = "60px"
    button.style.margin = "12px"
    button.style.borderWidth = "0px"
    button.style.borderRadius = "32px"
    button.style.flex = 1
    button.textContent = text
    
    if (parent) {parent.appendChild(button)}
    return button
}

const grid = createGrid(document.body)

const inputrow = createRow(grid)
const input = document.createElement("input")
input.readOnly = "true"
input.style.backgroundColor = "rgb(50,50,50)"
input.style.color = "rgb(255,255,255)"
input.style.textAlign = "right"
input.style.fontSize = "60px"
input.style.width = "100%"
input.style.height = "100%"
inputrow.appendChild(input)

const col1 = createRow(grid)
const btn7 = createButton(col1, "7")
const btn8 = createButton(col1, "8")
const btn9 = createButton(col1, "9")
const btnDiv = createButton(col1, "÷")
const col2 = createRow(grid)
const btn4 = createButton(col2, "4")
const btn5 = createButton(col2, "5")
const btn6 = createButton(col2, "6")
const btnMul = createButton(col2, "×")
const col3 = createRow(grid)
const btn1 = createButton(col3, "1")
const btn2 = createButton(col3, "2")
const btn3 = createButton(col3, "3")
const btnMin = createButton(col3, "−")
const col4 = createRow(grid)
const btnDot = createButton(col4, ".")
const btn0 = createButton(col4, "0")
const btnEqa = createButton(col4, "=")
const btnAdd = createButton(col4, "+")


/*
for the first term, it is stored in the termSeq array as [term1]
then when you press an operator, the operator is stoed in the operSeq as [operator1]
the next term you enter is stored as [term1, term2]

calculates as operator(termSeq[1], operSeq[1], termSeq[2]) = result
example: operator(2, "+", 2) = 4
termSeq[1] = result

---------------------
TODO: figure out a way to properly code calculator operations after analyzing Odin: Object Basics
---------------------
*/
var term1 = null
var term2 = null

//numbers (row y,x)
btn0.addEventListener("click", () => {
    input.value += "0"
})
btn1.addEventListener("click", () => {
    input.value += "1"
})
btn2.addEventListener("click", () => {
    input.value += "2"
})
btn3.addEventListener("click", () => {
    input.value += "3"
})
btn4.addEventListener("click", () => {
    input.value += "4"
})
btn5.addEventListener("click", () => {
    input.value += "5"
})
btn6.addEventListener("click", () => {
    input.value += "6"
})
btn7.addEventListener("click", () => {
    input.value += "7"
})
btn8.addEventListener("click", () => {
    input.value += "8"
})
btn9.addEventListener("click", () => {
    input.value += "9"
})
btnDot.addEventListener("click", () => {
    input.value += "."
})

function operator() {
    if (term1 == null) {
        term1 = Number(input.value)
    }
    else {
        term2 = Number(input.value.substring(1))

        if (input.value.substring(0, 1) == "+") {
            term1 = term1 + term2
        }
        else if (input.value.substring(0, 1) == "−") {
            term1 = term1 - term2
        }
        else if (input.value.substring(0, 1) == "×") {
            term1 = term1 * term2
        }
        else if (input.value.substring(0, 1) == "÷") {
            term1 = term1 / term2
        }


        return term1 + term2
        term1 = null
        term2 = null
    }
}

//operators
btnAdd.addEventListener("click", () => {
    input.value = "+"
})
btnMin.addEventListener("click", () => {
    input.value = "−"
})
btnMul.addEventListener("click", () => {
    input.value = "×"
})
btnDiv.addEventListener("click", () => {
    input.value = "÷"
})
btnEqa.addEventListener("click", () => {
    input.value = "="
})