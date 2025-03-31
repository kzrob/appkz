var black = "#000000"
var white = "#FFFFFF"
var accent = "#0A81D1"
var shade = "#314CB6"

var grid = null
function createGrid(gridSize) {
    //Delete grid in order to update grid size
    if (grid != null) {
        grid.remove()
        grid = null
    }

    //Create the drawing board
    grid = document.createElement("div")
    grid.style.border = "solid"
    grid.style.borderWidth = "1px"
    grid.style.width = "512px"
    grid.style.height = "512px"
    grid.style.marginLeft = "auto"
    grid.style.marginRight = "auto"
    grid.style.display = "flex"
    grid.style.flexDirection = "row"
    grid.style.flexWrap = "wrap"
    document.body.appendChild(grid)

    //Create each column
    for (let i=0; i<gridSize; i++) {
        let column = document.createElement("div")
        column.style.backgroundColor = "#FFFFFF"
        column.style.display = "flex"
        column.style.flexDirection = "column"
        column.style.flex = 1
        column.style.flexWrap = "wrap"
        grid.appendChild(column)

        //Create each row
        for (let i=0; i<gridSize; i++) {
            let row = document.createElement("div")
            row.style.backgroundColor = "#FFFFFF"
            row.style.border = "solid"
            row.style.borderWidth = "1px"
            row.style.flexBasis = "100%"
            row.style.flex = 1
            row.addEventListener("mouseover", () => {
                row.style.backgroundColor = "#000000"
            })
            column.appendChild(row)
        }
    }
}

const topbar = document.createElement("div")
topbar.style.width = "100%"
topbar.style.float = "left"
topbar.style.backgroundColor = accent

const main = document.createElement("main")

const title = document.createElement("h1")
title.textContent = "Sketchpad"
title.style.color = white
title.style.textShadow = "4px 4px #000000"
title.style.textAlign = "center"

const buttons = document.createElement("div")
buttons.style.textAlign = "center"
buttons.style.padding = "16px"

const gridSizeBtn = document.createElement("button")
gridSizeBtn.textContent = "Set Grid Size"
gridSizeBtn.addEventListener("click", () => {
    let newGridSize = prompt("Set the new grid size to: (number range: 1-100)", "16")
    if (newGridSize == null) {return}
    if (newGridSize < 1) {newGridSize = 1}
    if (newGridSize > 100) {newGridSize = 100}
    createGrid(newGridSize)
})

const clearBtn = document.createElement("button")
clearBtn.textContent = "Clear Sketches"
clearBtn.addEventListener("click", () => {
    for (const column of grid.children) {
        for (const row of column.children) {
            row.style.backgroundColor = "#FFFFFF"
        }
    }
})

const borderBtn = document.createElement("button")
borderBtn.textContent = "Hide Borders"
var bordersOn = true
borderBtn.addEventListener("click", () => {
    bordersOn = !bordersOn
    
    if (bordersOn) {
        borderBtn.textContent = "Hide Borders"
        for (const column of grid.children) {
            for (const row of column.children) {
                row.style.borderWidth = "1px"
            }
        }
    }
    else {
        borderBtn.textContent = "Show Borders"
        for (const column of grid.children) {
            for (const row of column.children) {
                row.style.borderWidth = "0px"
            }
        }
    }
})

document.body.appendChild(topbar)
topbar.appendChild(main)
main.appendChild(title)
document.body.appendChild(buttons)
buttons.appendChild(gridSizeBtn)
buttons.appendChild(clearBtn)
buttons.appendChild(borderBtn)
createGrid(16)