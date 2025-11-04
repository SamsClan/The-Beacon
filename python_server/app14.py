from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # ✅ Allow requests from your React frontend (e.g. localhost:3000)

MEDITATION_CONTENT = {
    "joy": {
        "video": "https://www.youtube.com/embed/1ZYbU82GVz4",
        "audio": "https://www.youtube.com/embed/cEqZthCaMpo"
    },
    "sadness": {
        "video": "https://www.youtube.com/embed/inpok4MKVLM",
        "audio": "https://www.youtube.com/embed/z6X5oEIg6Ak"
    },
    "anger": {
        "video": "https://www.youtube.com/embed/MIr3RsUWrdo",
        "audio": "https://www.youtube.com/embed/qQyQj2Fgi_k"
    },
    "fear": {
        "video": "https://www.youtube.com/embed/sTANio_2E0Q",
        "audio": "https://www.youtube.com/embed/GgP75HAvrlY"
    },
    "neutral": {
        "video": "https://www.youtube.com/embed/ZToicYcHIOU",
        "audio": "https://www.youtube.com/embed/o-6f5wQXSu8"
    }
}


@app.route('/')
def home():
    return jsonify({"message": "Meditation API is running"})


@app.route('/detect_mood', methods=['POST'])
def detect_mood():
    data = request.get_json() or {}
    text = data.get('text', '').strip()

    if not text:
        return jsonify({"error": "Please describe how you feel."}), 400

    blob = TextBlob(text)
    polarity = blob.sentiment.polarity

    if polarity > 0.3:
        mood = "joy"
    elif polarity < -0.3:
        mood = "sadness"
    elif any(word in text.lower() for word in ["angry", "mad", "frustrated"]):
        mood = "anger"
    elif any(word in text.lower() for word in ["fear", "anxious", "stress", "worry"]):
        mood = "fear"
    else:
        mood = "neutral"

    return jsonify({
        "mood": mood,
        "video": MEDITATION_CONTENT[mood]["video"],
        "audio": MEDITATION_CONTENT[mood]["audio"]
    })


if __name__ == '__main__':
    app.run(port=5002, debug=True)
