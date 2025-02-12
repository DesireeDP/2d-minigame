const playground = document.querySelector('main #players');

// Calcular el movimiento de los personajes
function physics() {
    // Fuerza de la gravedad
    for(i=0; i<playerData.length; i++) {
        if(playerData[i].gravity < 0) playerData[i].gravity += 1;
        else if(playerData[i].gravity < 20) playerData[i].gravity += 0.4;
    }
    for(i=0; i<playerData.length; i++) {
        let prevPosition = playerData[i].bottom;
        if(playerData[i].bottom <= 60 && playerData[i].gravity > 0) {
            playerData[i].gravity = 0;
            playerData[i].bottom = 60;
        } else {
            playerData[i].bottom = Math.min(playerData[i]. bottom - playerData[i].gravity, (window.innerHeight - innerData.characterHeight));
        }
        if (getCollisions(i)) playerData[i].bottom = prevPosition;
    }

    // Aceleración lateral
    moveCharacters();
    for(i=0; i<playerData.length; i++) {
        let prevPosition = playerData[i].left;
        playerData[i].left += playerData[i].accel;
        if (playerData[i].left < 0) playerData[i].left = 0;
        if (playerData[i].left > window.innerWidth - innerData.characterWidth) playerData[i].left = window.innerWidth - innerData.characterWidth;
        if (getCollisions(i)) playerData[i].left = prevPosition;
    }
}

// Comprobar colisiones en la coordenada X
function getCollisions(p) {
    let contact = false;
    let deltaX = 0, deltaY = 0;
    for (j=0; j<playerData.length; j++) {
        if(j != p) {
            deltaX = playerData[j].left - playerData[p].left;
            if (deltaX < innerData.characterWidth && deltaX > - innerData.characterWidth) {
                deltaY = playerData[j].bottom - playerData[p].bottom;
                if (deltaY < innerData.characterHeight && deltaY > - innerData.characterHeight) {
                    contact = true;
                }
            }
        }
    }
    return contact;
}

// Comprobar coordenadas en generación
function genCollisions(coordX, coordY) {
    let contact = false;
    let deltaX = 0, deltaY = 0;
    for (j=0; j<playerData.length; j++) {
        deltaX = playerData[j].left - coordX;
        if (deltaX < innerData.characterWidth && deltaX > - innerData.characterWidth) {
            deltaY = playerData[j].bottom - coordY;
            if (deltaY < innerData.characterHeight && deltaY > - innerData.characterHeight) {
                contact = true;
            }
        }
    }
    return contact;
}



// Ejecutar fuerza de salto
function jump(player2 = false) {
    if(player2) playerData[innerData.currentP2].gravity = -20;
    else playerData[innerData.currentP1].gravity = -20;
}

// Ejecutar fuerza de movimiento laterial
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