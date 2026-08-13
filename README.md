#TaskFlow
A full-stack task management app I built from scratch — React, FastAPI, MySQL, and JWT authentication, wired end-to-end.

Hi, I'm Monika — this is TaskFlow, a project I built to prove I can ship real, working software across the entire stack, not just follow a tutorial. Every layer here — the database schema, the REST API, the authentication, the UI — was designed and written by me, tested with Postman before the frontend even existed, and connected into one working app.
If you're a recruiter or hiring manager skimming this, here's the short version: I can take a feature from "empty database" to "logged-in user seeing their data on screen," and I understand every layer in between.

#What I Built
TaskFlow lets a user register, log in securely, and manage a personal task list.
Every task endpoint is protected — no valid token, no data. Hit it without one and you get a clean 401 Unauthorized.
Pass a valid Bearer token and you get the user's tasks back.
The frontend reflects this live: a login screen gates access, and the dashboard only renders once authentication actually succeeds.
This isn't a static page or a single script — it's a complete request-to-database pipeline, the same shape as production systems, built and understood from the ground up.

#Why I Built It This Way
Most beginner projects stop at one layer. I wanted to prove I could own all of them:
Database — a normalized MySQL schema, designed before a single line of API code
Backend — a REST API in FastAPI with a proper three-layer architecture
Auth — real JWT-based authentication, not a hardcoded "isLoggedIn" flag
Frontend — a React UI that correctly handles loading, empty, authenticated, and unauthenticated states

#Tech Stack
Frontend — React, React Hooks (useState, useEffect, useCallback), Axios, Vite
Backend — Python, FastAPI, Uvicorn (ASGI server)
Database — MySQL, SQLAlchemy ORM
Auth & Security — JWT (python-jose), bcrypt password hashing (passlib)
Tooling — Postman, Git

#How I Structured It
I followed a clean three-layer separation on the backend — the same pattern used in production APIs:
Routes — handle HTTP only: receive the request, return the response
Services — hold the business logic: creating tasks, verifying auth
Models — the data layer: SQLAlchemy classes mapped straight to MySQL tables
That separation means my business logic in services/ can be tested independently of the web framework, and my routes stay thin and readable — I can walk through the reasoning behind that in an interview, field by field.
On the frontend, I pulled all data-fetching into a custom useTasks hook, so components like TaskList and TaskCard only ever worry about rendering.

#Decisions I Made — and Why
Auth is enforced at the dependency-injection level in FastAPI. Every protected route declares current_user = Depends(auth_service.get_current_user), so there's no route where I could accidentally forget to check auth.
Passwords are never stored in plain text. They're hashed with bcrypt before they ever touch the database.
The auth token lives in React component state, passed down through props and hook arguments — one traceable source of truth for the logged-in session.
CORS is locked to the known frontend origin rather than left wide open.

#Running It
Backend — a Python virtual environment isolates dependencies, Base.metadata.create_all() auto-generates the MySQL schema on first run, and Uvicorn serves the app with hot-reload:
uvicorn main:app --reload

Frontend — Vite serves the React app with instant hot-module-reload, and Axios attaches the JWT to every authenticated request:
npm run dev

#Project Structure
taskflow-backend/
main.py
database/db.py
models/task.py, models/user.py
routes/tasks.py, routes/auth.py
services/task_service.py, services/auth_service.py
taskflow-frontend/src/
App.jsx, main.jsx
components/Login.jsx, TaskCard.jsx, TaskList.jsx
hooks/useTasks.js

#What This Project Proves
I can design a normalized SQL schema from scratch
I can build a REST API with proper status codes and error handling
I can implement real authentication — not fake it
I can build a frontend that correctly handles every state: loading, empty, authenticated, unauthenticated
I test before I build the UI — this was verified endpoint-by-endpoint in Postman before the frontend existed

#What's Next
I'm actively extending this project:
Task editing, completion toggling, and deletion endpoints
Per-user task ownership, so tasks are scoped to the account that created them
Moving the JWT secret out of source and into an environment variable
Automated tests for the service layer

#About Me
Monika P
B.E. Electronics and Communication Engineering (ECE) — VLSI Design Engineering
Presidency University, Bengaluru — Batch of 2027
I'm actively looking for opportunities where I can bring this kind of full-stack, ship-it-end-to-end thinking to a team.
GitHub: github.com/Monika-25-web
LinkedIn: linkedin.com/in/monika-p-b5ba5b400
Email: monikapgowda11@gmail.com
