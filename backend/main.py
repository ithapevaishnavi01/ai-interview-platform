from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from database import engine, Base, SessionLocal
from models.user import User
from auth import hash_password, verify_password, create_access_token


# Create database tables
Base.metadata.create_all(bind=engine)


# Create FastAPI application
app = FastAPI(
    title="CareerForge AI API",
    description="AI-powered interview preparation platform",
    version="1.0.0"
)


# Enable frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------
# Request Models
# -------------------------

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str


# -------------------------
# Basic Routes
# -------------------------

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


# -------------------------
# Dashboard API
# -------------------------

@app.get("/api/dashboard")
def dashboard():
    return {
        "questions_solved": 48,
        "interviews_completed": 12,
        "current_streak": 8,
        "overall_progress": 72
    }


# -------------------------
# Register API
# -------------------------

@app.post("/api/auth/register")
def register_user(user_data: RegisterRequest):

    db = SessionLocal()

    try:

        # Check if email already exists
        existing_user = db.query(User).filter(
            User.email == user_data.email
        ).first()

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Email already registered"
            )

        # Check if username already exists
        existing_username = db.query(User).filter(
            User.username == user_data.username
        ).first()

        if existing_username:
            raise HTTPException(
                status_code=400,
                detail="Username already exists"
            )

        # Hash password
        hashed_password = hash_password(user_data.password)

        # Create new user
        new_user = User(
            username=user_data.username,
            email=user_data.email,
            password_hash=hashed_password
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return {
            "message": "User registered successfully",
            "user": {
                "id": new_user.id,
                "username": new_user.username,
                "email": new_user.email
            }
        }

    finally:
        db.close()


# -------------------------
# Login API
# -------------------------

@app.post("/api/auth/login")
def login_user(user_data: LoginRequest):

    db = SessionLocal()

    try:

        # Find user by email
        user = db.query(User).filter(
            User.email == user_data.email
        ).first()

        # Check user
        if not user:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # Verify password
        password_valid = verify_password(
            user_data.password,
            user.password_hash
        )

        if not password_valid:
            raise HTTPException(
                status_code=401,
                detail="Invalid email or password"
            )

        # Create JWT token
        access_token = create_access_token(
            {
                "user_id": user.id,
                "email": user.email
            }
        )

        return {
            "message": "Login successful",
            "access_token": access_token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email
            }
        }

    finally:
        db.close()