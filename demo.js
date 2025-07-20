const recordBtn = document.getElementById("recordBtn");
const analyzeBtn = document.getElementById("analyzeBtn");
const speechText = document.getElementById("speechText");
const sentimentText = document.getElementById("sentimentText");
const emergencyOptions = document.getElementById("emergencyOptions");
const policeBtn = document.getElementById("policeBtn");
const hospitalBtn = document.getElementById("hospitalBtn");
const fireBtn = document.getElementById("fireBtn");

let recordedSpeech = "";

// Initialize Speech Recognition API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US"; // Set language to English
recognition.continuous = false; // Stop recording after one phrase

// Button to start speech recognition
recordBtn.addEventListener("click", () => {
    recognition.start();
    speechText.textContent = "Listening...";
    analyzeBtn.disabled = false; // Enable the Analyze Emotion button once speech is recorded
});

// When speech is recognized
recognition.onresult = (event) => {
    recordedSpeech = event.results[0][0].transcript;
    speechText.textContent = `You said: "${recordedSpeech}"`;
};

// Button to analyze sentiment (emotion) of the recorded speech
analyzeBtn.addEventListener("click", async () => {
    if (recordedSpeech) {
        // Perform sentiment analysis on the recorded speech using the backend
        const sentimentData = await analyzeSentiment(recordedSpeech);

        // Display the sentiment analysis result
        sentimentText.textContent = `Sentiment: ${sentimentData.sentiment}`;
        document.getElementById("sentimentOutput").style.display = "block";

        // Show or hide emergency options based on sentiment
        if (sentimentData.sentiment === "Negative") {
            emergencyOptions.style.display = "block";
        } else {
            emergencyOptions.style.display = "none";
        }
    }
});

// Function to send the recorded speech to the Flask backend for analysis
async function analyzeSentiment(text) {
    const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    });

    const data = await response.json();
    return data;
}

// Emergency buttons to simulate calling emergency services
policeBtn.addEventListener("click", () => {
    alert("Calling the Police... Stay Safe!");
});

hospitalBtn.addEventListener("click", () => {
    alert("Calling the Hospital... Help is on the way!");
});

fireBtn.addEventListener("click", () => {
    alert("Calling the Fire Station... Emergency units are on their way!");
});
