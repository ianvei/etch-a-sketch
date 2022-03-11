const gridGoesHere = document.querySelector('.grid-here');

// for (let i = 0; i < 25; i++){
//     const divGridElement = document.createElement('div');
//     divGridElement.setAttribute('style', 'border: 1px solid black')
//     divGridElement.style.width = (600 / 25) + 'px'
//     divGridElement.style.height = (600 / 25) + 'px'
//     divGridElement.className = "cell";
//     gridGoesHere.appendChild(divGridElement);
// }

// create rows along the div (as many as needed)

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



let mouseIsDown = false

function colourOneCell(e){
    e.target.classList.add('hold');
}

function colourCell(e){
    if (mouseIsDown === true){
        e.target.classList.add('hold');
    }
    else {
        return;
    }
}
// mousover is hover
function startColouringCell(){
    mouseIsDown = true
    if (mouseIsDown === true){
        cells.forEach(cell => cell.addEventListener("mouseover", colourCell))
    }
    // else if (mouseIsDown === false){
    //     return;
    // }
}


function removeColourCell(e){
    e.target.classList.remove('hold');
}

function stopColouring(){
    mouseIsDown = false;
}

gridSize = parseInt(prompt("How many cells would you like to draw?"))

makeGrid(gridSize)

const cells = Array.from(document.querySelectorAll('.cell'));
cells.forEach(cell => cell.addEventListener("mousedown", startColouringCell))
cells.forEach(cell => cell.addEventListener("click", colourOneCell))
cells.forEach(cell => cell.addEventListener("dblclick", removeColourCell))
cells.forEach(cell => cell.addEventListener("mouseup", stopColouring))



function clearCanvas(cells){
    console.log('hello')
    // cells.forEach(cell => cell.target.classList.remove('hold'));
}

document.getElementById('clearCanvas').onclick = function() {
    console.log('hello')
    cells.forEach(cell => cell.classList.remove('hold'))
    gridSize = parseInt(prompt("How many cells would you like to draw?"))
    // cells.target.classList.remove('hold');
};
// document.getElementById('clearCanvas').onclick = clearCanvas(cells);