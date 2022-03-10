const gridGoesHere = document.querySelector('.grid-here');

for (let i = 0; i < 16; i++){
    const divGridElement = document.createElement('div');
    divGridElement.setAttribute('style', 'border: 1px solid black')
    divGridElement.style.width = (600 / 16)
    divGridElement.style.height = (600 / 16)
    divGridElement.className = "cell";
    gridGoesHere.appendChild(divGridElement);
}