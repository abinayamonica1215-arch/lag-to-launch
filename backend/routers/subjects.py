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
    tags=["Subjects"]
)


@router.post("/subjects", response_model=schemas.SubjectSuccessResponse, status_code=status.HTTP_201_CREATED)
def create_subject(subject_data: schemas.SubjectCreate, db: Session = Depends(get_db)):
    """
    Endpoint to create a subject record for an existing student.
    - Validates that the student_id exists in the database.
    - Stores the subject in the subjects table.
    """
    # 1. Check if student exists in the database
    student = db.query(models.Student).filter(models.Student.id == subject_data.student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {subject_data.student_id} does not exist"
        )

    # 2. Create new Subject instance
    new_subject = models.Subject(
        student_id=subject_data.student_id,
        subject_name=subject_data.subject_name,
        semester=subject_data.semester,
        marks=subject_data.marks,
        grade=subject_data.grade,
        is_arrear=subject_data.is_arrear
    )

    # 3. Save subject record into database
    db.add(new_subject)
    db.commit()
    db.refresh(new_subject)

    # 4. Return success response
    return {
        "message": "Subject created successfully",
        "subject": new_subject
    }


@router.get("/subjects/{student_id}", response_model=List[schemas.SubjectResponse], status_code=status.HTTP_200_OK)
def get_subjects_by_student(student_id: int, db: Session = Depends(get_db)):
    """
    Endpoint to retrieve all subjects for a specific student by student_id.
    - Checks if the student exists in the database.
    - Retrieves all subjects for the given student_id.
    - Returns a 404 response if no subjects exist for that student.
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {student_id} does not exist"
        )

    # 2. Query all subjects for the given student_id
    subjects = db.query(models.Subject).filter(models.Subject.student_id == student_id).all()
    if not subjects:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"No subjects found for student with ID {student_id}"
        )

    # 3. Return subjects list
    return subjects
