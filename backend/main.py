from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers import users
from backend.database import engine, Base

Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router, prefix="/api", tags=["users"])


@app.get("/")
def read_root():
    return {"Hello": "World"}
