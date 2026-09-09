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
    tags=["Authentication"]
)


@router.post("/register", response_model=schemas.RegisterSuccessResponse, status_code=status.HTTP_201_CREATED)
def register_student(student_data: schemas.StudentRegister, db: Session = Depends(get_db)):
    """
    Endpoint to register a new student.
    - Validates email uniqueness.
    - Validates roll number uniqueness.
    - Saves student record to SQLite database via SQLAlchemy.
    """
    # 1. Check if email is already registered
    existing_student = db.query(models.Student).filter(models.Student.email == student_data.email).first()
    if existing_student:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered"
        )
    
    # 2. Check if roll number is already registered
    existing_roll = db.query(models.Student).filter(models.Student.roll_number == student_data.roll_number).first()
    if existing_roll:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Roll number is already registered"
        )

    # 3. Create a new Student instance
    new_student = models.Student(
        name=student_data.name,
        email=student_data.email,
        password=student_data.password,
        college=student_data.college,
        department=student_data.department,
        graduation_year=student_data.graduation_year,
        semester=student_data.semester,
        roll_number=student_data.roll_number,
        target_career=student_data.target_career
    )

    # 4. Save student record into database
    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    # 5. Return success response
    return {
        "message": "Student registered successfully",
        "student": new_student
    }


@router.post("/login", response_model=schemas.LoginSuccessResponse, status_code=status.HTTP_200_OK)
def login_student(login_data: schemas.StudentLogin, db: Session = Depends(get_db)):
    """
    Endpoint for student login.
    - Finds student by email in the database.
    - Verifies password against stored password.
    - Returns student details on successful authentication.
    """
    # 1. Check if email exists in database
    student = db.query(models.Student).filter(models.Student.email == login_data.email).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student with this email does not exist"
        )
    
    # 2. Check if password matches
    if student.password != login_data.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password"
        )

    # 3. Return success response
    return {
        "message": "Login successful",
        "student_id": student.id,
        "name": student.name,
        "email": student.email
    }
