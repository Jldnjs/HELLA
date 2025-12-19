import os
from dotenv import load_dotenv
load_dotenv()

from typing import Union
from fastapi import FastAPI, Query, HTTPException
from app.book.endpoint import router as book_router

app = FastAPI()
app.include_router(book_router)

@app.get("/api")
def read_root():
    return {"Hello":"World"}


