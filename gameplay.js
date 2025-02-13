const innerData = {
    characterWidth: 50,
    characterHeight: 80,
    currentP1: 1,
    currentP2: 0,
    nextChar: 0,
};

const playerData = [];

/* ======================================== */

// Generar un nuevo personaje
function newPlayer() {
    let i = innerData.nextChar;
    innerData.nextChar++;
    let posX, posY;
    let safety = 0;
    do {
        posX = Math.random() * (window.innerWidth - innerData.characterWidth);
        posY = (Math.random() * (window.innerHeight - innerData.characterHeight - 60)) + 60;
        if (safety < 500) safety++;
        else break;
    } while (genCollisions(posX, posY))

    playerData[i] = {
        left: posX,
        bottom: posY,
        accel: 0,
        gravity: 0,
    };
    let character = document.createElement('div');
    character.classList.add('character');
    character.classList.add('ghost' + (i%5))
    character.id = `player${i}`;

    character.onclick = function() { selectCharacter(this, true); };
    character.oncontextmenu = function(e) {
        e.preventDefault();
        selectCharacter(this, false)
    };

    playground.appendChild(character);
}   

// Seleccionar un personaje para moverlo
function selectCharacter(char, p2) {
    if(p2) innerData.currentP2 = char.id.slice(6);
    else innerData.currentP1 = char.id.slice(6);
}