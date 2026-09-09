from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, Text
from sqlalchemy.orm import relationship

try:
    from backend.database import Base
except ModuleNotFoundError:
    from database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    college = Column(String, nullable=True)
    roll_number = Column(String, unique=True, index=True, nullable=False)
    department = Column(String, nullable=False)
    semester = Column(Integer, nullable=False)
    graduation_year = Column(Integer, nullable=False)
    target_career = Column(String, nullable=True)

    # Relationships to other tables
    academic_record = relationship("AcademicRecord", back_populates="student", uselist=False, cascade="all, delete-orphan")
    subjects = relationship("Subject", back_populates="student", cascade="all, delete-orphan")
    skills = relationship("Skill", back_populates="student", cascade="all, delete-orphan")
    assessments = relationship("Assessment", back_populates="student", cascade="all, delete-orphan")
    recommendations = relationship("Recommendation", back_populates="student", cascade="all, delete-orphan")
    study_plans = relationship("StudyPlan", back_populates="student", cascade="all, delete-orphan")


class AcademicRecord(Base):
    __tablename__ = "academic_records"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), unique=True, nullable=False)
    cgpa = Column(Float, default=0.0)
    attendance = Column(Float, default=0.0)
    credits_earned = Column(Integer, default=0)
    total_credits = Column(Integer, default=0)
    active_arrears = Column(Integer, default=0)
    arrear_count = Column(Integer, default=0)
    arrear_status = Column(String, default="none")

    # Relationship back to Student
    student = relationship("Student", back_populates="academic_record")


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    subject_name = Column(String, nullable=False)
    subject_code = Column(String, nullable=True)
    semester = Column(Integer, nullable=False, default=1)
    marks = Column(Float, default=0.0)
    grade = Column(String, nullable=True)
    is_arrear = Column(Boolean, default=False)

    # Relationship back to Student
    student = relationship("Student", back_populates="subjects")


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    skill_name = Column(String, nullable=False)
    skill_level = Column(String, nullable=False)
    proficiency_level = Column(String, nullable=True)

    # Relationship back to Student
    student = relationship("Student", back_populates="skills")


class Assessment(Base):
    __tablename__ = "assessments"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    assessment_name = Column(String, nullable=False)
    score = Column(Float, default=0.0)
    max_score = Column(Float, default=100.0)

    # Relationship back to Student
    student = relationship("Student", back_populates="assessments")


class Recommendation(Base):
    __tablename__ = "recommendations"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String, nullable=True)

    # Relationship back to Student
    student = relationship("Student", back_populates="recommendations")


class StudyPlan(Base):
    __tablename__ = "study_plans"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    progress = Column(Float, default=0.0)
    status = Column(String, default="In Progress")

    # Relationship back to Student
    student = relationship("Student", back_populates="study_plans")
