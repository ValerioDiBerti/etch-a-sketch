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




const eraseButton = document.querySelector('.erase');
eraseButton.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.background = 'white';
    })
})

const gridSizeButton = document.querySelector('.grid-size');
gridSizeButton.addEventListener('click', () => {
    gridSize = parseInt(prompt('grid size?'))
    makeGrid();
})