document.addEventListener('keydown', function(event) {
    keyboardHandler(event.which);
});


function keyboardHandler (key){
    switch(key){
        case 78:                    // N | Nuevo personaje
            newPlayer();
            break;
        case 37:                    // Flecha izq. | P1 izq.

            break;
        case 39:                    // Flecha dere. | P1 dere.

            break;
        case 38:                    // Flecha arriba | P1 saltar
            jump();
            break;
        case 40:                    // Flecha abajo | P1 agachar

            break;
        case 13:                    // Enter | P1 diálogo

            break;
        case 65:                    // A | P2 izq.

            break;
        case 68:                    // D | P2 dere.

            break;
        case 87:                    // W | P2 saltar
            jump(true);
            break;
        case 83:                    // S | P2 agachar

            break;
        case 32:                    // Espacio | P2 diálogo

            break;
        }
    }
