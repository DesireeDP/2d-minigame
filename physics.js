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
        bottom: (Math.random() * (window.innerHeight - info.height - 60)) + 60,
        accel: 0,
        gravity: 0,
    };
    let player = document.createElement('div');
    player.classList.add('player');
    player.id = `player${i}`;
    playground.appendChild(player);
}   

function render() {
    physics();
    for(let i=0; i<playerData.length; i++) {
        document.getElementById(`player${i}`).style.left = playerData[i].left + 'px';
        document.getElementById(`player${i}`).style.bottom = playerData[i].bottom + 'px';
    }
    if(renderActive) requestAnimationFrame(render);
}

function physics() {
    // Gravity
    for(i=0; i<playerData.length; i++) {
        if(playerData[i].gravity < 0) playerData[i].gravity += 1;
        else if(playerData[i].gravity < 20) playerData[i].gravity += 0.4;
    }
    for(i=0; i<playerData.length; i++) {
        if(playerData[i].bottom <= 60 && playerData[i].gravity > 0) {
            playerData[i].gravity += 0;
            playerData[i].bottom = 60;
        } else {
            playerData[i].bottom -= playerData[i].gravity;
        }
    }

    // Acceleration
    for(i=0; i<playerData.length; i++) {
        playerData[i].left += playerData[i].accel;
    }
}

function pressMove(who, positive = true) {
    if(positive) playerData[who].accel += 0.5;
    else playerData[who].accel -= 0.5;
}

function jump(who) {
    playerData[who].gravity = -20;
}

render();