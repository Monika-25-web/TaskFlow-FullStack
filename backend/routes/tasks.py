from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import SessionLocal
from services import task_service, auth_service

router = APIRouter(prefix="/api/tasks")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def list_tasks(db: Session = Depends(get_db), current_user: str = Depends(auth_service.get_current_user)):
    return task_service.get_all_tasks(db)

@router.post("/")
def add_task(title: str, db: Session = Depends(get_db), current_user: str = Depends(auth_service.get_current_user)):
    return task_service.create_task(db, title)
