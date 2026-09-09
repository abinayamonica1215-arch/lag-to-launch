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
    tags=["Academic Record"]
)


@router.post("/academic", response_model=schemas.AcademicRecordSuccessResponse, status_code=status.HTTP_201_CREATED)
def save_academic_record(academic_data: schemas.AcademicRecordCreate, db: Session = Depends(get_db)):
    """
    Endpoint to save academic record for an existing student.
    - Validates that the student_id exists in the database.
    - Saves or updates academic information in the academic_records table.
    """
    # 1. Check if student exists in the database
    student = db.query(models.Student).filter(models.Student.id == academic_data.student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {academic_data.student_id} does not exist"
        )

    # 2. Calculate active_arrears from arrear_count and arrear_status
    active_arrears_count = academic_data.arrear_count if academic_data.arrear_status.lower() == "active" else 0

    # 3. Check if academic record already exists for this student
    record = db.query(models.AcademicRecord).filter(models.AcademicRecord.student_id == academic_data.student_id).first()

    if record:
        # Update existing academic record
        record.cgpa = academic_data.cgpa
        record.attendance = academic_data.attendance
        record.credits_earned = academic_data.credits_earned
        record.total_credits = academic_data.total_credits
        record.arrear_count = academic_data.arrear_count
        record.arrear_status = academic_data.arrear_status
        record.active_arrears = active_arrears_count
        message = "Academic record updated successfully"
    else:
        # Create new academic record
        record = models.AcademicRecord(
            student_id=academic_data.student_id,
            cgpa=academic_data.cgpa,
            attendance=academic_data.attendance,
            credits_earned=academic_data.credits_earned,
            total_credits=academic_data.total_credits,
            arrear_count=academic_data.arrear_count,
            arrear_status=academic_data.arrear_status,
            active_arrears=active_arrears_count
        )
        db.add(record)
        message = "Academic record saved successfully"

    # 4. Commit database changes
    db.commit()
    db.refresh(record)

    # 5. Return success response
    return {
        "message": message,
        "academic_record": record
    }


@router.get("/academic/{student_id}", response_model=schemas.AcademicRecordResponse, status_code=status.HTTP_200_OK)
def get_academic_record(student_id: int, db: Session = Depends(get_db)):
    """
    Endpoint to retrieve the academic record for a specific student by student_id.
    - Checks if the student exists in the database.
    - Checks if an academic record exists for the student.
    - Returns complete academic information.
    """
    # 1. Check if student exists in database
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID {student_id} does not exist"
        )

    # 2. Find student's academic record from academic_records
    academic_record = db.query(models.AcademicRecord).filter(models.AcademicRecord.student_id == student_id).first()
    if not academic_record:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Academic record not found for student with ID {student_id}"
        )

    # 3. Return complete academic information
    return academic_record
