from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
from models.user import User

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CareerForge AI API",
    description="AI-powered interview preparation platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "CareerForge AI API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


@app.get("/api/dashboard")
def dashboard():
    return {

        #njkfn
        "questions_solved": 48,
        "interviews_completed": 12,
        "current_streak": 8,
        "overall_progress": 72
    }