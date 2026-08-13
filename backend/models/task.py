from sqlalchemy import Column, Integer, String, Boolean
from database.db import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    status = Column(String(50), default="pending")
    completed = Column(Boolean, default=False)
