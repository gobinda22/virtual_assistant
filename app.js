const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// speak function for voice of the VA take sentance as input
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence); //create a object that takes input sentance

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date(); // date object
    var hr = day.getHours(); // store the hour its a method in date

    if(hr >= 0 && hr < 12){
        speak("Good Morning");
    }
    else if(hr >= 12 && hr <= 17){
        speak("Good Afternoon");
    }
    else{
        speak("Good Eveing");
    }
}

window.addEventListener('load', ()=>{
    speak("hello")
    wishMe();
    speak("Keven here. I'm a virtual assistant of Derik");
    speak("To start talking with me please click on the mic and say, make sure you open chrome");
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase()); // convert lowercase all character
}
btn.addEventListener('click', ()=>{
    recognition.start(); // for start recognition
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    
    if(message.includes('hello')) {
        const finalText = "To start talking with me please click on the mic and say, make sure you open chrome";
        speak("hi");
        wishMe();
        speak("Keven here. I'm a virtual assistant of Derik");
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine, What about you";
        speech.text = finalText;
    }

    else if(message.includes('what is your name')) {
        const finalText = "My name is Keven";
        speech.text = finalText;
    }
    
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('tell me a joke')) {
        const finalText = "your whole life is joke";
        speech.text = finalText;
    }

    else if(message.includes('do you love me')) {
        const finalText = "yes, You are a brother like no other";
        speech.text = finalText;
    }
    else if(message.includes('play a song') || message.includes("play song") || message.includes("play music")){
        const finalText = "ok let me play my favorite song";
        window.open('https://www.youtube.com/watch?v=RgKAFK5djSk/');
        speech.text = finalText;
    }

    else if(message.includes("open youtube")){
        const finalText = "opening youtube";
        window.open('https://www.youtube.com/');
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time') || message.includes('Keven, what is the time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('open calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
