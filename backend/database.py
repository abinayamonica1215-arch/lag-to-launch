import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Determine database path dynamically
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PARENT_DIR = os.path.dirname(BASE_DIR)

# Priority order for finding sql_app.db
candidate_paths = [
    os.path.join(PARENT_DIR, "sql_app.db"),
    os.path.join(BASE_DIR, "sql_app.db"),
    os.path.join(os.getcwd(), "sql_app.db"),
]

db_file = candidate_paths[0]
for path in candidate_paths:
    if os.path.exists(path):
        db_file = path
        break

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite:///{db_file}")

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
