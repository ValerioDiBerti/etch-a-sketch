let gridSize = 32;
let blocks;
const grid = document.querySelector('.grid')

let currentMode = 'black';

makeGrid();

function makeGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
        a = document.createElement('div');
        a.setAttribute("class", "block");
        a.style.width = `${100/gridSize}%`;
        a.style.height = `${100/gridSize}%`;
        a.style.backgroundColor = 'rgb(255,255,255)';
        grid.appendChild(a)
    }
    blocks = document.querySelectorAll('.block');
    draw();
}

// draw function
function draw() {
    blocks.forEach(block => {
        block.addEventListener('mouseenter', (e) => {
            if (currentMode === 'black') {
                block.style.backgroundColor = 'rgb(0,0,0)';
            }
            if (currentMode === 'rgb') {
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                block.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
            if (currentMode === 'shading') {
                let oldColor = block.style.backgroundColor.slice(4,-1).split(',');
                let newColor = oldColor.map( value => {return value - 256/10});
                // block.style.backgroundColor = `rgb(${(oldColor - [10,10,10]).join(', ')})`;
                block.style.backgroundColor = `rgb(${newColor.join(', ')})`;
            }
        });

    })
}

// Erase button
const eraseButton = document.querySelector('.erase');
eraseButton.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.background = 'white';
    })
});

// Grid size button
const gridSizeButton = document.querySelector('.grid-size');
gridSizeButton.addEventListener('click', () => {
    do {
        if (gridSize > 100) alert("please enter a grid size <= 100");
        gridSize = parseInt(prompt('grid size? [1-100]'));
    } while (gridSize > 100);
    makeGrid();
});

// RGB tool button
const rgbButton = document.querySelector('.rgb');
rgbButton.addEventListener('click', () => {
    currentMode = 'rgb';
});

// Black tool button
const blackButton = document.querySelector('.black');
blackButton.addEventListener('click', () => {
    currentMode = 'black';
});

// Shading tool
const shadingButton = document.querySelector('.shading');
shadingButton.addEventListener('click', () => {
    currentMode = 'shading';
})