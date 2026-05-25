# Learnify AI 

An AI-powered study assistant that generates explanations, quiz questions, and flashcards for any topic instantly.

---

## What It Does

Paste any topic and get:
- **Explanation** — clear 3-paragraph breakdown for students
- **Quiz** — 3 multiple choice questions with instant answer checking
- **Flashcards** — 5 flip cards with terms and definitions

---

## Tech Stack

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- Context API for state management

### Backend
- FastAPI (Python)
- Google Gemini AI (`google-genai` SDK)
- Pydantic for request/response validation
- Uvicorn server

---

## Project Structure

```
learnify-AI/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.tsx          
│   │   │   ├── ExplanationCard.tsx 
│   │   │   ├── QuizCard.tsx       
│   │   │   └── FlashCard.tsx      
│   │   ├── context/
│   │   │   └── generateContext.ts
│   │   ├── utils/
│   │   │   └── parseOutput.ts    
│   │   └── App.tsx
│   ├── .env
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── api/
    │   │   └── routes/
    │   │       └── generate.py    
    │   ├── core/
    │   │   └── config.py         
    │   ├── schemas/
    │   │   └── study.py           
    │   ├── services/
    │   │   └── gemini_service.py  
    │   └── main.py                
    ├── .env
    └── requirements.txt
```

---

## Getting Started



### Backend Setup

```bash
# go to backend folder
cd backend

# create and activate virtual environment
python -m venv venv
venv\Scripts\activate       


# install dependencies
pip install -r requirements.txt

# create .env file

# add your Gemini API key in .env

# run the server
uvicorn src.main:app --reload
```

Backend runs at `http://localhost:8000`



---

### Frontend Setup

```bash
# go to frontend folder
cd frontend

# install dependencies
npm install

# create .env file


# run the dev server
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## Environment Variables

### Backend `.env`
```
GEMINI_API_KEY=your_gemini_api_key_here
```

### Frontend `.env`
```
VITE_BACKEND_URL=http://localhost:8000
