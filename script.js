const GRID_SIZE = 16;

const grid = document.querySelector('.grid')

for (i=0; i<SIZE*SIZE; i++) {
    a = document.createElement('div');
    a.setAttribute("class", "block");
    a.style.width = `calc(100%/${GRID_SIZE})`;
    a.style.height = `calc(100%/${GRID_SIZE})`;
    grid.appendChild(a)
}

const blocks = document.querySelectorAll('.block');
blocks.forEach(block => {
    
    block.addEventListener('mouseenter', () => {
        block.style.background = 'red';
    });
    // block.addEventListener('mouseleave', () => {
    //     block.style.background = 'white';
    // });

})

const eraseButton = document.querySelector('.erase');

eraseButton.addEventListener('click', () => {
    blocks.forEach(block => {
        block.style.background = 'white';
    })
})