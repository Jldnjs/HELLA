import os
import httpx
from fastapi import HTTPException

KAKAO_REST_API_KEY = os.getenv("KAKAO_API_KEY")

async def fetch_kakao_books(query:str, page:int, size:int) ->dict:
    if not KAKAO_REST_API_KEY:
      raise RuntimeError("KAKAO_REST_API_KEY가 설정되어있지 않습니다.")

    url = "https://dapi.kakao.com/v3/search/book"
    headers = {"Authorization": f"KakaoAK {KAKAO_REST_API_KEY}"}
    params = {"query":query, "page":page, "size":size}

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            resp= await client.get(url, headers=headers,params=params)
    except httpx.RequestError as e:
        raise HTTPException(status_code=502,detail=f"kakao API 요청 실패: {str(e)}")
        
    if resp.status_code != 200:
        raise HTTPException(
            status_code=resp.status_code,
            detail=f"kakao API 에러:{resp.text}",
        )
    return resp.json()