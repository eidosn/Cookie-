let isDragging = false;
let offset = { x: 0, y: 0 };

const gameContainer = document.getElementById('gamecontainer');

gameContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    offset.x = e.clientX - gameContainer.getBoundingClientRect().left;
    offset.y = e.clientY - gameContainer.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        gameContainer.style.left = `${e.clientX - offset.x}px`;
        gameContainer.style.top = `${e.clientY - offset.y}px`;
        gameContainer.style.position = 'fixed';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.getElementById('popupexit').addEventListener('click', () => {
    game();
});

function game(){
    if (document.getElementById('game').classList.contains('hidden')) {
    document.getElementById('game').classList.remove('hidden');
    document.getElementById('game').classList.add('shown');
    } else {
        document.getElementById('game').classList.remove('shown');
        document.getElementById('game').classList.add('hidden');
    }
}