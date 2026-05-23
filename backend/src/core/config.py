from dotenv import load_dotenv
import os

load_dotenv()

print("KEY LOADED:", os.getenv("GEMINI_API_KEY"))
GEMINI_API_KEY= os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not working in .env file")