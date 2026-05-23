from pydantic import BaseModel

class StudyRequest(BaseModel):
    topic:str

class StudyResponse(BaseModel):
    content:str 