
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

from backend.ai_engine import (
    analyze_academic,
    calculate_placement_readiness,
    skill_gap_analysis,
    generate_recommendations,
    generate_training_plan,
    generate_career_recommendations
)

app = FastAPI()


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


# Academic Analysis API
@app.post("/analyze")
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


# Placement Readiness API
@app.post("/placement-analysis")
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
@app.post("/skill-gap")
async def skill_gap(data: SkillInput):

    result = skill_gap_analysis(
        data.target_career,
        data.current_skills
    )

    return result


# Training Plan API
@app.post("/training-plan")
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
@app.post("/career-recommendations")
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