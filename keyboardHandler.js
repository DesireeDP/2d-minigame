document.addEventListener('keydown', function(event) {
    console.log(event);
});

var positionLeft = 20;
var positionTop= 20;
var distance = 5;
var player = document.getElementById('player');
var playersTalk = document.getElementById('playersTalk');
var screenW = window.innerWidth;
var screenH = window.innerHeight;


function keyboardHandler (event){
    switch(event.KeyCode){
        case 37:                 //Flecha izquierda
            if (positionLeft>0) {
                positionLeft-=distance;
                player.style.left = positionLeft + 'px';
            }
        break
        case 39: 
        if (positionLeft+distance <= screenW - 50)   //Flecha derecha
            positionLeft += distance;
            player.style.left = positionLeft + "px";
        break;
          
        case 13:                    //enter salto
        if (positionTop>0) {
            positionTop-=distance;
            player.style.top = positionTop + 'px';
        }
        break
        case 40:                    // ir hacia abajo
        if (positionTop + distance <= screenH - 80) {
            positionTop += distance;
            player.style.top = positionTop + 'px';
        }
        break 
        case 76:                    //Dialogo personaje
            playersTalk.style.display = "block";
        }
        
    }

    function keyboardHandler (event){
        switch(event.KeyCode){
            case 65:                 //Tecla A
                if (positionLeft>0) {
                    positionLeft-=distance;
                    player.style.left = positionLeft + 'px';
                }
            break
            case 68: 
            if (positionLeft+distance <= screenW - 50)   //Tecla D
                positionLeft += distance;
                player.style.left = positionLeft + "px";
            break;
              
            case 32:                    //barra espaciadora salto
            if (positionTop>0) {
                positionTop-=distance;
                player.style.top = positionTop + 'px';
            }
            break
            case 83:                    // ir hacia abajo
            if (positionTop + distance <= screenH - 80) {
                positionTop += distance;
                player.style.top = positionTop + 'px';
            }
            break 
            case 70:                    //Dialogo personaje
                playersTalk.style.display = "block";
            }
            
        }
