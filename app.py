# app.py
from flask import Flask, request, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)

# Initialize VADER Sentiment Analyzer
analyzer = SentimentIntensityAnalyzer()

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    # Get the speech text from the request body
    text = request.json.get('text', '')
    
    # Analyze sentiment using VADER
    sentiment_score = analyzer.polarity_scores(text)
    
    # Determine the sentiment (Positive, Negative, or Neutral)
    if sentiment_score['compound'] >= 0.05:
        sentiment = "Positive"
    elif sentiment_score['compound'] <= -0.05:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"

    # Return the sentiment result and the compound score
    return jsonify({
        'sentiment': sentiment,
        'compound_score': sentiment_score['compound'],
        'positive_score': sentiment_score['pos'],
        'negative_score': sentiment_score['neg'],
        'neutral_score': sentiment_score['neu']
    })

if __name__ == '__main__':
    app.run(debug=True)
