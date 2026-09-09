from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

try:
    from backend.database import get_db
    from backend import models, schemas
except ModuleNotFoundError:
    from database import get_db
    import models
    import schemas

router = APIRouter(
    tags=["Skills"]
)


@router.post("/skills", response_model=schemas.SkillSuccessResponse, status_code=status.HTTP_201_CREATED)
def create_skill(skill_data: schemas.SkillCreate, db: Session = Depends(get_db)):
    """
    Endpoint to add a new skill for an existing student.
    - Validates that the student_id exists in the database.
    - Stores the skill in the skills table.
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == skill_data.student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {skill_data.student_id} does not exist"
        )

    # 2. Create new Skill instance
    new_skill = models.Skill(
        student_id=skill_data.student_id,
        skill_name=skill_data.skill_name,
        skill_level=skill_data.skill_level,
        proficiency_level=skill_data.skill_level
    )

    # 3. Save skill record into database
    db.add(new_skill)
    db.commit()
    db.refresh(new_skill)

    # 4. Return success response
    return {
        "message": "Skill added successfully",
        "skill": new_skill
    }


@router.get("/skills/{student_id}", response_model=List[schemas.SkillResponse], status_code=status.HTTP_200_OK)
def get_skills_by_student(student_id: int, db: Session = Depends(get_db)):
    """
    Endpoint to retrieve all skills for a specific student by student_id.
    - Checks if the student exists in the database.
    - Retrieves all skills for the given student_id.
    - Returns a 404 response if no skills are found.
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {student_id} does not exist"
        )

    # 2. Query all skills for the given student_id
    skills = db.query(models.Skill).filter(models.Skill.student_id == student_id).all()
    if not skills:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No skills found for student with ID {student_id}"
        )

    # 3. Return skills list
    return skills
