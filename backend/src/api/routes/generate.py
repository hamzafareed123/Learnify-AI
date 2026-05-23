from fastapi import FastAPI
from src.services.gemini_service import generate_study_material
from src.schemas.study import StudyRequest,StudyResponse
from fastapi import APIRouter



router = APIRouter()

@router.post("/generate")
async def generate_material(topic: StudyRequest) -> StudyResponse:
    content = await generate_study_material(topic.topic)
    return StudyResponse(content=content)


