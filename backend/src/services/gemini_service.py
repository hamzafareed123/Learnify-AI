from google import genai
from src.core.config import GEMINI_API_KEY
import asyncio

client = genai.Client(api_key=GEMINI_API_KEY)

async def generate_study_material(topic: str) -> str:
    prompt = f"""
    For the topic "{topic}", generate the following in this exact format:

    ## Explanation
    Write a clear 3 paragraph explanation for a student.

    ## Quiz
    Generate 3 multiple choice questions with 4 options each. Mark the correct answer.

    ## Flashcards
    Generate 5 flashcards as:
    Term: definition
    Term: definition
    """
    response = await asyncio.to_thread(
        client.models.generate_content,
        model="models/gemini-2.5-flash",
        contents=prompt
    )
    return response.text