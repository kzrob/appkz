function createGrid(parent) {
    let div = document.createElement("div")
        div.style.border = "solid"
        div.style.borderWidth = "1px"
        div.style.width = "512px"
        div.style.height = "512px"
        div.style.marginLeft = "auto"
        div.style.marginRight = "auto"
        div.style.display = "flex"
        div.style.flexDirection = "row"
        div.style.flexWrap = "wrap"

    if (parent) {parent.appendChild(div)}
    return div
}

function createColumn(parent) {
    let div = document.createElement("div")
        div.style.backgroundColor = "#FFFFFF"
        div.style.display = "flex"
        div.style.flexDirection = "column"
        div.style.flex = 1
        div.style.flexWrap = "wrap"

    if (parent) {parent.appendChild(div)}
    return div
}

function createRow(parent, text) {
    let button = document.createElement("button")
        button.width = "100%"
        button.height = "100%"
        button.style.border = "solid"
        button.style.borderWidth = "1px"
        button.style.borderRadius = "16px"
        button.style.flexBasis = "100%"
        button.style.flex = 1
        button.textContent = text

    if (parent) {parent.appendChild(button)}
    return button
}

const grid = createGrid(document.body)
    const col1 = createColumn(grid)
        const row1 = createRow(col1)
        const row2 = createRow(col1)
        const row3 = createRow(col1)
        const row4 = createRow(col1)

        row4.addEventListener("click", () => {
            console.log("addition")
        })

    const col2 = createColumn(grid)
    const col3 = createColumn(grid)
    const col4 = createColumn(grid)

const topbar = document.createElement("div")
topbar.style.width = "100%"
topbar.style.float = "left"
topbar.style.backgroundColor = "#222299"

const main = document.createElement("main")

const title = document.createElement("h1")
title.textContent = "Calculator"
title.style.color = "#FFFFFF"
title.style.textShadow = "4px 4px #000000"
title.style.textAlign = "center"



const inputDiv = document.createElement("div")
inputDiv.style.backgroundColor = "rgb(0,0,0)"
inputDiv.style.textAlign = "center"
inputDiv.style.padding = "16px"

const input = document.createElement("input")
input.style.width = "100%"
input.style.height = "100%"
input.type = "text"

document.body.appendChild(topbar)
topbar.appendChild(main)
main.appendChild(title)

document.body.appendChild(inputDiv)
inputDiv.appendChild(input)