const gridGoesHere = document.querySelector('.grid-here');

function makeGrid (pixels){
    for (let i = 0; i < pixels; i++){
        const divGridElement = document.createElement('div');
        divGridElement.setAttribute('style', 'display: inline-flex;')
        divGridElement.style.width = "100%";
        divGridElement.style.height = (600 / pixels) + 'px';
        divGridElement.className = "row" + i;
        gridGoesHere.appendChild(divGridElement);
        const rowToAppend = document.querySelector('.row' + i)
        for (let j = 0; j < pixels; j++){
            const cell = document.createElement('div');
            cell.setAttribute('style', 'flex-shrink: 1; flex-basis: 2;')
            cell.style.width = (600 / pixels) + 'px';
            cell.style.height = '100%';
            cell.className = "cell";
            rowToAppend.appendChild(cell)
        }
    }
}

let blackFlag = true
let colorFlag = false


function colourOneCell(e){
    if (blackFlag){
        e.target.style.backgroundColor = "black"
    }
    else if (!blackFlag){
        e.target.style.backgroundColor = randomColourGenerator()
    }
}

function colourCell(e){
    if (mouseIsDown === true){
        // e.target.classList.add('hold');
        if (blackFlag){
            e.target.style.backgroundColor = "black"
        }
        else if (!blackFlag){
            e.target.style.backgroundColor = randomColourGenerator()
        }
    }
    else {
        return;
    }
}

function startColouringCell(){
    const cells = Array.from(document.querySelectorAll('.cell'));
    mouseIsDown = true
    if (mouseIsDown === true){
        cells.forEach(cell => cell.addEventListener("mouseover", colourCell))
    }
    return mouseIsDown
}

function removeColourCell(e){
    e.target.classList.remove('hold');
    e.target.style.backgroundColor = "white"
}

function stopColouring(){
    mouseIsDown = false;
}

function eventListeners(){
    const cells = Array.from(document.querySelectorAll('.cell'));
    cells.forEach(cell => cell.addEventListener("mousedown", startColouringCell))
    cells.forEach(cell => cell.addEventListener("click", colourOneCell))
    cells.forEach(cell => cell.addEventListener("dblclick", removeColourCell))
    cells.forEach(cell => cell.addEventListener("mouseup", stopColouring))
}

function randomInRange(from, to) {
    var r = Math.random();
    return Math.floor(r * (to - from) + from);
  }

function randomColourGenerator(){
    let red = randomInRange(40, 255);
    let blue = randomInRange(40, 255);
    let green = randomInRange(40, 255);
    return `rgb(${red}, ${blue}, ${green})`
}


let mouseIsDown = false
// clickFlag = false

function createGrid(){
    gridSize = parseInt(prompt("How many cells would you like to draw?"))
    if (gridSize <= 100){
        makeGrid(gridSize)
    } 
    else if (gridSize > 100) {
        alert("Please enter a number under 100")
    }
}   

createGrid()
eventListeners()


document.getElementById('clearCanvas').onclick = function() {
    console.log('hello')
    mouseIsDown = false
    clickFlag = false
    var node = document.getElementById('container-grid');
    node.innerHTML = "";
    // gridSize = parseInt(prompt("How many cells would you like to draw?"))
    // makeGrid(gridSize)
    createGrid()
    eventListeners()      
};


document.getElementById('rainbow').onclick = function() {
    blackFlag = false
    console.log(blackFlag)
}

document.getElementById('black').onclick = function() {
    blackFlag = true
    console.log(blackFlag)
}