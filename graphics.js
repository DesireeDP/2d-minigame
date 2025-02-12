let renderActive = true;

// Render each frame
function render() {
    physics();
    for(let i=0; i<playerData.length; i++) {
        document.getElementById(`player${i}`).style.left = playerData[i].left + 'px';
        document.getElementById(`player${i}`).style.bottom = playerData[i].bottom + 'px';
    }
    if(renderActive) requestAnimationFrame(render);
}