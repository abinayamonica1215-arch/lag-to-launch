from pydantic import BaseModel
from typing import Optional, List


# Pydantic request schema for Student Registration
class StudentRegister(BaseModel):
    name: str
    email: str
    password: str
    college: Optional[str] = None
    department: str
    graduation_year: int
    semester: int
    roll_number: str
    target_career: Optional[str] = None


# Pydantic response schema for Student data
class StudentResponse(BaseModel):
    id: int
    name: str
    email: str
    roll_number: str
    department: str
    semester: int
    graduation_year: int
    college: Optional[str] = None
    target_career: Optional[str] = None

    class Config:
        from_attributes = True


# Response schema for Registration endpoint
class RegisterSuccessResponse(BaseModel):
    message: str
    student: StudentResponse


# Pydantic request schema for Student Login
class StudentLogin(BaseModel):
    email: str
    password: str


# Pydantic response schema for Successful Login
class LoginSuccessResponse(BaseModel):
    message: str
    student_id: int
    name: str
    email: str


# Pydantic request schema for Academic Record Creation/Update
class AcademicRecordCreate(BaseModel):
    student_id: int
    cgpa: float
    attendance: float
    credits_earned: int
    total_credits: int
    arrear_count: int
    arrear_status: str


# Pydantic response schema for Academic Record data
class AcademicRecordResponse(BaseModel):
    id: int
    student_id: int
    cgpa: float
    attendance: float
    credits_earned: int
    total_credits: int
    active_arrears: int
    arrear_count: int
    arrear_status: str

    class Config:
        from_attributes = True


# Response schema for Academic Record POST endpoint
class AcademicRecordSuccessResponse(BaseModel):
    message: str
    academic_record: AcademicRecordResponse


# Pydantic request schema for Subject creation
class SubjectCreate(BaseModel):
    student_id: int
    subject_name: str
    semester: int
    marks: float
    grade: Optional[str] = None
    is_arrear: bool = False


# Pydantic response schema for Subject data
class SubjectResponse(BaseModel):
    id: int
    student_id: int
    subject_name: str
    semester: int
    marks: float
    grade: Optional[str] = None
    is_arrear: bool

    class Config:
        from_attributes = True


# Response schema for Subject POST endpoint
class SubjectSuccessResponse(BaseModel):
    message: str
    subject: SubjectResponse


# Pydantic request schema for Skill creation
class SkillCreate(BaseModel):
    student_id: int
    skill_name: str
    skill_level: str


# Pydantic response schema for Skill data
class SkillResponse(BaseModel):
    id: int
    student_id: int
    skill_name: str
    skill_level: str

    class Config:
        from_attributes = True


# Response schema for Skill POST endpoint
class SkillSuccessResponse(BaseModel):
    message: str
    skill: SkillResponse


# Pydantic response schema for Dashboard endpoint
class DashboardResponse(BaseModel):
    student: StudentResponse
    academic: AcademicRecordResponse
    subjects: List[SubjectResponse]
    skills: List[SkillResponse]

    class Config:
        from_attributes = True
