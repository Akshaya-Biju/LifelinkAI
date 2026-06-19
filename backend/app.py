from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

# Load .env
load_dotenv()

# Groq Client
client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

# FastAPI App
app = FastAPI(title="LifeLink AI")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Temporary Storage
donors = []

# Models
class Question(BaseModel):
    question: str

# Home Route
@app.get("/")
def home():
    return {
        "project": "LifeLink AI",
        "status": "Running"
    }

# Register Donor
@app.post("/register-donor")
def register_donor(data: dict):

    donors.append(data)

    return {
        "message": "Donor Registered Successfully"
    }

# Get Donors
@app.get("/donors")
def get_donors():

    return donors

# AI Assistant
@app.post("/ask-ai")
def ask_ai(data: Question):

    try:

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": """
You are LifeLink AI.

You help users with:
- Blood donation
- Blood groups
- Emergency blood requests
- Health awareness
- Donor guidance

Give short and helpful answers.
"""
                },
                {
                    "role": "user",
                    "content": data.question
                }
            ]
        )

        return {
            "answer": response.choices[0].message.content
        }

    except Exception as e:

        return {
            "answer": f"AI Error: {str(e)}"
        }