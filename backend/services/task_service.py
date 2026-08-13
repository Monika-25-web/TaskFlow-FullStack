from models.task import Task

def get_all_tasks(db):
    return db.query(Task).all()

def create_task(db, title):
    task = Task(title=title)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task
