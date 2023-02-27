window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)
recognition.addEventListener('end', () => {recognition.start()})

function onSpeak(event){
    let chute = event.results[0][0].transcript
    console.log(chute)
    verificaSeNum(chute)
    //verificaChute(chute)
    
}

