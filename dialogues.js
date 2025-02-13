var dialogues = ['Buuu... ¿me viste?','Estoy atrapado entre mundos...','¡No huyas, solo quiero hablar','Hace mucho frío aquí...',
    '¿Puedes oírme?','No recuerdo cómo llegué aquí...','Alguien más está cerca... lo siento.','Susurros... siempre susurros...',
    '¡No me ignores!','Mi historia quedó sin final...','¿Dónde está mi cuerpo?','Las sombras me llaman..','¿Tienes miedo?',
    'Antes, este era mi hogar...','Escucha con atención... el viento habla.','Solo quiero descansar...','No todos los fantasmas son malos.',
    'A veces, todavía sueño..','¡No despiertes a los otros!','Ya es tarde... demasiado tarde...']

var usedDialogues = [];

function characterDialogues () {
    var talks = document.getElementById('characDialoge');

    // Selecciona las frases aleatorias sin que se repitan.
    if (dialogues.length > 0) {
        var randomSentence = Math.floor(Math.random() * dialogues.length);
        var sentence = dialogues.splice(randomSentence, 1)[0];
        usedDialogues.push(sentence);
    } else {
        var sentence = "No tengo más que decir...por hoy";
        dialogues = usedDialogues;
        usedDialogues = [];
    }

    talks.innerHTML = sentence;
    talks.style.display = "block";
    
}
    