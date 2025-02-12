const innerData = {
    characterWidth: 50,
    characterHeight: 80,
    currentP1: 0,
    currentP2: 1,
};

const playerData = [];

/* ======================================== */

// Generar un nuevo personaje
function newPlayer() {
    let i = playerData.length;
    playerData[i] = {
        left: Math.random() * (window.innerWidth - innerData.characterWidth),
        bottom: (Math.random() * (window.innerHeight - innerData.characterHeight - 60)) + 60,
        accel: 0,
        gravity: 0,
    };
    let character = document.createElement('div');
    character.classList.add('character');
    character.id = `player${i}`;

    character.onclick = function() { selectCharacter(this, false); };
    character.oncontextmenu = function(e) {
        e.preventDefault();
        selectCharacter(this, true)
    };

    playground.appendChild(character);
}   

// Seleccionar un personaje para moverlo
function selectCharacter(char, p2) {
    if(p2) innerData.currentP2 = char.id[6];
    else innerData.currentP1 = char.id[6];
}