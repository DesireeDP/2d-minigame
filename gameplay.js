function newPlayer() {
    let i = playerData.length;
    playerData[i] = {
        left: Math.random() * (window.innerWidth - innerData.characterWidth),
        bottom: (Math.random() * (window.innerHeight - innerData.characterHeight - 60)) + 60,
        accel: 0,
        gravity: 0,
    };
    let player = document.createElement('div');
    player.classList.add('player');
    player.id = `player${i}`;
    playground.appendChild(player);
}   

function selectPlayer() {
    
}