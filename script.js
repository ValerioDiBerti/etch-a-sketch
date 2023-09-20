let gridSize = 16;
let blocks;
const grid = document.querySelector('.grid')

makeGrid();

function makeGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    for (let i = 0; i < gridSize * gridSize; i++) {
        a = document.createElement('div');
        a.setAttribute("class", "block");
        a.style.width = `calc(100%/${gridSize})`;
        a.style.height = `calc(100%/${gridSize})`;
        grid.appendChild(a)
        console.log(a);
    }
    blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.background = 'red';
        });
        // block.addEventListener('mouseleave', () => {
        //     block.style.background = 'white';
        // });

    })
}

// Erase button
const eraseButton = document.querySelector('.erase');
eraseButton.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.background = 'white';
    })
})

// Grid size button
const gridSizeButton = document.querySelector('.grid-size');
gridSizeButton.addEventListener('click', () => {
    do {
        if (gridSize > 100) alert("please enter a grid size <= 100");
        gridSize = parseInt(prompt('grid size? [1-100]'));
    } while (gridSize > 100)
    makeGrid();
})