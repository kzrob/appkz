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
    div.style.border = "solid"
    div.style.borderWidth = "1px"
    div.style.width = "512px"
    div.style.height = "640px"
    div.style.marginLeft = "auto"
    div.style.marginRight = "auto"
    div.style.padding = "4px"
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
    div.style.padding = "4px"
    div.style.flexDirection = "row"
    div.style.flex = 1
    div.style.flexWrap = "wrap"
    
    if (parent) {parent.appendChild(div)}
    return div
}

function createButton(parent, text) {
    let button = document.createElement("button")
    button.width = "100%"
    button.height = "100%"
    button.style.backgroundColor = "rgb(40,40,40)"
    button.style.color = "rgb(100,100,200)"
    button.style.fontSize = "60px"
    button.style.borderWidth = "0px"
    button.style.borderRadius = "100%"
    button.style.flex = 1
    button.textContent = text
    
    if (parent) {parent.appendChild(button)}
    return button
}

const grid = createGrid(document.body)

const inputrow = createRow(grid)

const input = document.createElement("input")
input.type = "number"
input.inputMode = "numeric"
input.style.backgroundColor = "rgb(50,50,50)"
input.style.color = "rgb(255,255,255)"
input.style.textAlign = "right"
input.style.fontSize = "60px"
input.style.width = "100%"
input.style.height = "100%"
input.style.borderRadius = "20px"
inputrow.appendChild(input)

const col1 = createRow(grid)
const row11 = createButton(col1, "7")
const row12 = createButton(col1, "8")
const row13 = createButton(col1, "9")
const row14 = createButton(col1, "/")
const col2 = createRow(grid)
const row21 = createButton(col2, "4")
const row22 = createButton(col2, "5")
const row23 = createButton(col2, "6")
const row24 = createButton(col2, "*")
const col3 = createRow(grid)
const row31 = createButton(col3, "1")
const row32 = createButton(col3, "2")
const row33 = createButton(col3, "3")
const row34 = createButton(col3, "-")
const col4 = createRow(grid)
const row41 = createButton(col4, ".")
const row42 = createButton(col4, "0")
const row43 = createButton(col4, "=")
const row44 = createButton(col4, "+")


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
var termSeq = [null, null]
var operSeq = [null]


var term1 = ""

//numbers (row y,x)
row42.addEventListener("click", () => {
    term1 = term1 + "0"
    input.value = term1
})
row31.addEventListener("click", () => {
    term1 = term1 + "1"
    input.value = term1
})
row32.addEventListener("click", () => {
    term1 = term1 + "2"
    input.value = term1
})
row33.addEventListener("click", () => {
    term1 = term1 + "3"
    input.value = term1
})
row21.addEventListener("click", () => {
    term1 = term1 + "4"
    input.value = term1
})
row22.addEventListener("click", () => {
    term1 = term1 + "5"
    input.value = term1
})
row23.addEventListener("click", () => {
    term1 = term1 + "6"
    input.value = term1
})
row11.addEventListener("click", () => {
    term1 = term1 + "7"
    input.value = term1
})
row12.addEventListener("click", () => {
    term1 = term1 + "8"
    input.value = term1
})
row13.addEventListener("click", () => {
    term1 = term1 + "9"
    input.value = term1
})

//operators
row44.addEventListener("click", () => {
    input.value = input.value + "+"
})
row34.addEventListener("click", () => {
    input.value = input.value + "-"
})
row24.addEventListener("click", () => {
    input.value = input.value + "*"
})
row14.addEventListener("click", () => {
    input.value = input.value + "/"
})
