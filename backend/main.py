from fastapi import FastAPI
from database import engine, Base
from models.user import User

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Interview Platform API",
    description="Backend API for AI-powered interview preparation",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "AI Interview Platform API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }