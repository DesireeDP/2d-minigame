const playground = document.querySelector('main #players');

const info = {
    width: 50,
    height: 80,
},
playerData = [];

let renderActive = true;

// function newPlayer() {
//     let i = playerData.length;
//     playerData[i] = {
//         left: Math.random() * (window.innerWidth - info.width),
//         bottom: Math.random() * (window.innerHeight - info.height - 48) + 48
//     };}

// function render() {
//     playground.innerHTML = '';
//     for(let i=0; i<playerData.length; i++) {
//         let player = document.createElement('div');
//         player.classList.add('player');
//         player.id = i;
//         player.style.left = playerData[i].bottom + 'px';
//         player.style.bottom = playerData[i].left + 'px';
//         playground.appendChild(player);
//     }
// }