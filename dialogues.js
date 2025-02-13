const dialogues = ['Buuu... ¿me viste?','Estoy atrapado entre mundos...','¡No huyas, solo quiero hablar','Hace mucho frío aquí...',
    '¿Puedes oírme?','No recuerdo cómo llegué aquí...','Alguien más está cerca... lo siento.','Susurros... siempre susurros...',
    '¡No me ignores!','Mi historia quedó sin final...','¿Dónde está mi cuerpo?','Las sombras me llaman..','¿Tienes miedo?',
    'Antes, este era mi hogar...','Escucha con atención... el viento habla.','Solo quiero descansar...','No todos los fantasmas son malos.',
    'A veces, todavía sueño..','¡No despiertes a los otros!','Ya es tarde... demasiado tarde...']

const talks = document.getElementById('characDialoge');
function characterDialogues(p2) {

    // Guardar el personaje seleccionado
    let selectedChar = 0;
    if(p2){
        selectedChar = innerData.currentP2;
    } else {
        selectedChar = innerData.currentP1;
    }


    // Selecciona las frases aleatorias sin que se repitan.
    if (playerData[selectedChar].dialogues.length > 0) {
        var randomSentence = Math.floor(Math.random() * playerData[selectedChar].dialogues.length);
        var sentence = playerData[selectedChar].dialogues.splice(randomSentence, 1)[0];
    } else {
        var sentence = "No tengo más que decir...por hoy";
    }


    talks.textContent = sentence;
    talks.style.display = "block";
    talks.style.left = playerData[selectedChar].left + 30 + 'px';
    talks.style.bottom = playerData[selectedChar].bottom + 60 + 'px';
    
}
    