from fastapi import FastAPI
from pydantic import BaseModel
from langdetect import detect
from deep_translator import GoogleTranslator
from transformers import pipeline


app = FastAPI()

# Load the sentiment model
sentiment_model = pipeline("sentiment-analysis", model="nlptown/bert-base-multilingual-uncased-sentiment")

class Comment(BaseModel):
    text: str

@app.post("/analyze")
def analyze(comment: Comment):
    lang = detect(comment.text)
    translated = GoogleTranslator(source='auto', target='en').translate(comment.text)
    result = sentiment_model(translated)[0]

    label = result["label"]
    score = result["score"]

    if "1" in label or "2" in label:
        sentiment = "negative"
    elif "3" in label:
        sentiment = "neutral"
    else:
        sentiment = "positive"

    return {
        "language": lang,
        "translated": translated,
        "sentiment": sentiment,   
        "confidence": round(score, 3)
    }
