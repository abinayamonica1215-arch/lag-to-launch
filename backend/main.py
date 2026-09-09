import os
import sys

# Ensure parent directory and backend directory are in python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List
from sqlalchemy.orm import Session

try:
    from backend.database import Base, engine, get_db
    from backend import models
    from backend.routers import auth, academic, subjects, skills, dashboard
    from backend.ai_engine import (
        analyze_academic,
        calculate_placement_readiness,
        skill_gap_analysis,
        generate_recommendations,
        generate_training_plan,
        generate_career_recommendations
    )
except ModuleNotFoundError:
    from database import Base, engine, get_db
    import models
    from routers import auth, academic, subjects, skills, dashboard
    from ai_engine import (
        analyze_academic,
        calculate_placement_readiness,
        skill_gap_analysis,
        generate_recommendations,
        generate_training_plan,
        generate_career_recommendations
    )

# Create database tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Lag-to-Launch Backend API",
    description="Backend service for Lag-to-Launch platform",
    version="1.0.0"
)

# Include Member 4 Database Routers
app.include_router(auth.router)
app.include_router(academic.router)
app.include_router(subjects.router)
app.include_router(skills.router)
app.include_router(dashboard.router)


# Health Check
@app.get("/health")
async def health():
    return {"status": "ok"}


# Subject Model
class Subject(BaseModel):
    name: str
    marks: float


# Academic Analysis Input Model
class AcademicInput(BaseModel):
    cgpa: float
    attendance: float
    arrears: int
    subjects: List[Subject]


# Placement Assessment Input Model
class PlacementInput(BaseModel):
    technical: float
    dsa: float
    sql: float
    aptitude: float
    communication: float
    projects: float


# Skill Gap Input Model
class SkillInput(BaseModel):
    target_career: str
    current_skills: List[str]


# Career Recommendation Input Model
class CareerInput(BaseModel):
    readiness: str
    target_career: str


# Academic Analysis API (Nithiya's AI API)
@app.post("/analyze", tags=["AI Engine"])
async def analyze(data: AcademicInput):

    subjects = [
        {
            "name": subject.name,
            "marks": subject.marks
        }
        for subject in data.subjects
    ]

    result = analyze_academic(
        data.cgpa,
        data.attendance,
        data.arrears,
        subjects
    )

    recommendations = generate_recommendations(
        data.arrears,
        result["weak_subjects"],
        []
    )

    result["recommendations"] = recommendations

    return result


# Integration Endpoint: Analyze Student by student_id
@app.post("/student/{student_id}/analyze", tags=["Integration"])
async def analyze_student(student_id: int, db: Session = Depends(get_db)):
    """
    Integration Endpoint to analyze a student's academic status from SQLite DB:
    1. Accept student_id as a path parameter.
    2. Retrieve academic record from database.
    3. Retrieve all subjects for that student from database.
    4. Convert database data into exact request format required by /analyze API.
    5. Send data to existing /analyze AI logic.
    6. Return AI analysis response.
    7. Return clear 404 error if student, academic record, or subjects do not exist.
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {student_id} does not exist"
        )

    # 2. Check if academic record exists for student
    academic_record = db.query(models.AcademicRecord).filter(models.AcademicRecord.student_id == student_id).first()
    if not academic_record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Academic record not found for student with ID {student_id}"
        )

    # 3. Retrieve all subjects for student
    subject_list = db.query(models.Subject).filter(models.Subject.student_id == student_id).all()
    if not subject_list:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No subjects found for student with ID {student_id}"
        )

    # 4. Convert database data into exact request format required by /analyze API
    input_data = AcademicInput(
        cgpa=academic_record.cgpa,
        attendance=academic_record.attendance,
        arrears=academic_record.active_arrears if academic_record.active_arrears is not None else academic_record.arrear_count,
        subjects=[
            Subject(name=s.subject_name, marks=s.marks)
            for s in subject_list
        ]
    )

    # 5. Delegate to existing /analyze AI logic without duplicating logic
    return await analyze(input_data)


# Integration Endpoint: Skill Gap Analysis by student_id
@app.post("/student/{student_id}/skill-gap", tags=["Integration"])
async def skill_gap_student(student_id: int, db: Session = Depends(get_db)):
    """
    Integration Endpoint for Skill Gap Analysis by student_id from SQLite DB:
    1. Accept student_id as a path parameter.
    2. Check that student exists in database.
    3. Retrieve target_career from students table.
    4. Retrieve all skills for student from skills table.
    5. Convert database data into exact format required by /skill-gap AI logic.
    6. Call existing /skill-gap AI logic directly.
    7. Return clear HTTP 404 if student, target_career, or skills are missing.
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {student_id} does not exist"
        )

    # 2. Check if target_career is present
    if not student.target_career or not student.target_career.strip():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Target career not found for student with ID {student_id}"
        )

    # 3. Retrieve all skills for student from database
    skills_list = db.query(models.Skill).filter(models.Skill.student_id == student_id).all()
    if not skills_list:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No skills found for student with ID {student_id}"
        )

    # 4. Convert database data into exact request format required by /skill-gap API
    input_data = SkillInput(
        target_career=student.target_career,
        current_skills=[s.skill_name for s in skills_list]
    )

    # 5. Delegate directly to existing /skill-gap AI logic
    return await skill_gap(input_data)


# Placement Readiness API
@app.post("/placement-analysis", tags=["AI Engine"])
async def placement_analysis(data: PlacementInput):

    result = calculate_placement_readiness(
        data.technical,
        data.dsa,
        data.sql,
        data.aptitude,
        data.communication,
        data.projects
    )

    return result


# Skill Gap Analysis API
@app.post("/skill-gap", tags=["AI Engine"])
async def skill_gap(data: SkillInput):

    result = skill_gap_analysis(
        data.target_career,
        data.current_skills
    )

    return result


# Training Plan API
@app.post("/training-plan", tags=["AI Engine"])
async def training_plan(data: SkillInput):

    result = skill_gap_analysis(
        data.target_career,
        data.current_skills
    )

    plan = generate_training_plan(
        result["skill_gaps"]
    )

    return {
        "target_career": data.target_career,
        "skill_gaps": result["skill_gaps"],
        "training_plan": plan
    }


# Career Recommendation API
@app.post("/career-recommendations", tags=["AI Engine"])
async def career_recommendations(data: CareerInput):

    recommendations = generate_career_recommendations(
        data.readiness,
        data.target_career
    )

    return {
        "readiness": data.readiness,
        "target_career": data.target_career,
        "career_recommendations": recommendations
    }