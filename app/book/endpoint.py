from fastapi import APIRouter, Query
from .kakao_client import fetch_kakao_books

router = APIRouter(prefix="/api/books", tags=["books"])

@router.get("")
async def search_books(
    query: str = Query(...,description="검색학 책 제목/키워드"),
    page: int = Query(1,ge=1,le=50),
    size: int = Query(10,ge=1,le=50),
):

    data = await fetch_kakao_books(query=query,page=page,size=size)
    return data