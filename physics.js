const playground = document.querySelector('main #players');

const innerData = {
    characterWidth: 50,
    characterHeight: 80,
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
    moveCharacters();
    for(i=0; i<playerData.length; i++) {
        playerData[i].left += playerData[i].accel;
    }
}

function jump(player2 = false) {
    if(player2) playerData[innerData.currentP2].gravity = -20;
    else playerData[innerData.currentP1].gravity = -20;
}

function moveCharacters() {
    for(i=0; i<playerData.length; i++) {
        if(playerData[i].speeding == 'negative') {
            playerData[i].accel = Math.max(-20, playerData[i].accel - 1);
        }
        if(playerData[i].speeding == 'positive') {    
            playerData[i].accel = Math.min(20, playerData[i].accel + 1);
        }
        if(playerData[i].speeding == 'none') {
            if(playerData[i].accel < 1 && playerData[i].accel > -1) playerData[i].accel = 0;
            else playerData[i].accel /= 1.13;
        }
    }
}