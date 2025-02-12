const playground = document.querySelector('main #players');

const info = {
    width: 50,
    height: 80,
    currentP1: 0,
    currentP2: 1,
};

const playerData = [];

let renderActive = true;

/* ========================= */

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

function pressMove(positive = true, player2 = false) {
    if(positive) playerData[who].accel += 0.5;
    else playerData[who].accel -= 0.5;
}

function jump(player2 = false) {
    if(player2) playerData[info.currentP2].gravity = -20;
    else playerData[info.currentP1].gravity = -20;
}