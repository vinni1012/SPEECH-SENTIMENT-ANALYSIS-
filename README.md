# 🗣️ Speech Sentiment Emergency Helper

A web-based tool that captures speech, analyzes its emotional tone using sentiment analysis, and offers emergency service options if the sentiment is negative.

## 🚀 Features

- 🎤 **Speech-to-Text**: Record speech using the browser's Speech Recognition API.
- 📊 **Sentiment Analysis**: Analyze the sentiment using a Flask + VADER backend.
- 🚨 **Emergency Detection**: Automatically suggests emergency service options if negative emotions are detected.
- 💡 **Simple UI**: Clean and minimal interface for testing and usage.

## 🧩 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Sentiment Analysis**: VADER SentimentIntensityAnalyzer
- **Speech Recognition**: Web Speech API

## 📁 Folder Structure

├── app.py # Flask backend for sentiment analysis
├── index.html # Frontend HTML UI
├── style.css # Styling for the frontend
├── demo.js # Speech capture and sentiment logic (frontend)
Backend Setup (Python + Flask)
📦 Install dependencies:
pip install flask vaderSentiment
▶️ Run the backend server:
python app.py
The Flask server will start at: http://127.0.0.1:5000/analyze
 Frontend Setup
Just open index.html in your browser.

✅ Note: Ensure the backend is running before using the frontend so it can connect for sentiment analysis.
 Usage
Click the "Record Speech" button and speak.

Once recorded, click "Analyze Emotion".

If the sentiment is Negative, emergency service buttons will appear.

Click one to simulate calling an emergency service.

🧠 Sentiment Thresholds
compound >= 0.05 → Positive

compound <= -0.05 → Negative

Else → Neutral
