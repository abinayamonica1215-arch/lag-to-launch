from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

try:
    from backend.database import get_db
    from backend import models, schemas
except ModuleNotFoundError:
    from database import get_db
    import models
    import schemas

router = APIRouter(
    tags=["Dashboard"]
)


@router.get("/dashboard/{student_id}", response_model=schemas.DashboardResponse, status_code=status.HTTP_200_OK)
def get_dashboard(student_id: int, db: Session = Depends(get_db)):
    """
    Endpoint to retrieve complete dashboard data for a specific student.
    - Basic profile information from students
    - Academic information from academic_records
    - All subjects from subjects
    - All skills from skills
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {student_id} does not exist"
        )

    # 2. Check if academic information exists for student
    academic = db.query(models.AcademicRecord).filter(models.AcademicRecord.student_id == student_id).first()
    if not academic:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Academic record not found for student with ID {student_id}"
        )

    # 3. Retrieve all subjects for student
    subjects = db.query(models.Subject).filter(models.Subject.student_id == student_id).all()

    # 4. Retrieve all skills for student
    skills = db.query(models.Skill).filter(models.Skill.student_id == student_id).all()

    # 5. Return complete dashboard response
    return {
        "student": student,
        "academic": academic,
        "subjects": subjects,
        "skills": skills
    }
