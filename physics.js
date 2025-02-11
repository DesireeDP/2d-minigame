const playground = document.querySelector('main #players');

const info = {
    width: 50,
    height: 80,
};

const playerData = [];

let renderActive = true;

/* ========================= */

function newPlayer() {
    let i = playerData.length;
    playerData[i] = {
        left: Math.random() * (window.innerWidth - info.width),
        bottom: (Math.random() * (window.innerHeight - info.height - 60)) + 60
    };
    let player = document.createElement('div');
    player.classList.add('player');
    player.id = `player${i}`;
    playground.appendChild(player);
}   

function render() {
    for(let i=0; i<playerData.length; i++) {
        document.getElementById(`player${i}`).style.left = playerData[i].left + 'px';
        document.getElementById(`player${i}`).style.bottom = playerData[i].bottom + 'px';
    }
    if(renderActive) requestAnimationFrame(render);
}

render();