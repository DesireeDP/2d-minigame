var dialoges = ['Buuu... ¿me viste?','Estoy atrapado entre mundos...','¡No huyas, solo quiero hablar','Hace mucho frío aquí...',
    '¿Puedes oírme?','No recuerdo cómo llegué aquí...','Alguien más está cerca... lo siento.','Susurros... siempre susurros...',
    '¡No me ignores!','Mi historia quedó sin final...','¿Dónde está mi cuerpo?','Las sombras me llaman..','¿Tienes miedo?',
    'Antes, este era mi hogar...','Escucha con atención... el viento habla.','Solo quiero descansar...','No todos los fantasmas son malos.',
    'A veces, todavía sueño..','¡No despiertes a los otros!','Ya es tarde... demasiado tarde...']

var usedDialoges = [];

function characterDialoges () {
    var talks = document.getElementById('characDialoge');

    //Se reinician las frases cuando las dijeron todas
    if (dialoges.length === 0) {
        dialoges = usedDialoges;
        usedDialoges = [];
    }

    // Selecciona las frases aleatorias sin que se repitan.
    if (dialoges.length > 0) {
        var randomSentence = Math.floor(Math.random() * dialoges.length);
        var sentence = dialoges.splice(randomSentence, 1)[0];
        usedDialoges.push(sentence);
    }else {
        var sentence = "No tengo más que decir...por hoy";
    }

    talks.innerHTML = sentence;
    talks.style.display = "block";
    
}
    