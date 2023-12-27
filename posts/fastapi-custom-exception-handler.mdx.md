# FastAPI Custom Exception Handler 사용하기

title: FastAPI Custom Exception Handler 사용하기
description: FastAPI에서 커스텀 Exception Handler를 사용하는 방법을 알아보겠습니다. FastAPI API에서 다음과 같은 코드는 에러 응답을 반환합니다. FastAPI를 처음 쓸 때 HTTPException을 그냥 사용했었는데, status code와 detail message만 전달하니 함께 일하던 프론트엔드 동료가 error를 구분하기 어렵다고 구분할 수 있도록 code도 함께 넣어 전달해달라는 요청이 있었습니다.
tags: FastAPI
author: mingke
date: 2023/11/16

![fastapi_logo.png](FastAPI%20Custom%20Exception%20Handler%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5%20676c7a22b7b0412d9bf54ccb920c63ec/fastapi_logo.png)

## Custom Exception과 Exception Handler

FastAPI에서 커스텀 Exception Handler를 사용하는 방법을 알아보겠습니다. FastAPI API에서 다음과 같은 코드는 에러 응답을 반환합니다. FastAPI를 처음 쓸 때 HTTPException을 그냥 사용했었는데, status code와 detail message만 전달하니 함께 일하던 프론트엔드 동료가 error를 구분하기 어렵다고 구분할 수 있도록 code도 함께 넣어 전달해달라는 요청이 있었습니다.

```python
raise HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST, detail="ERROR"
)
```

- Status Code로 400을 전달
- {”detail”:”ERROR”} 로 Response를 전달

## 에러응답에 더 많은걸 담고 싶을 경우

다른 데이터를 추가로 담고 싶어 간단하게 `HTTPException`을 상속받아 Custom Exception을 만들었습니다. 

```python
from fastapi import HTTPException as BaseHTTPException

class HTTPException(BaseHTTPException):
    def __init__(
        self,
        status_code: int,
        detail: str = None,
        code: str = None,
        headers: dict = None,
    ):
        self.code = code
        super().__init__(status_code, detail, headers)
```

프론트엔드에 Error를 구분할 수 있는 코드를 전달하기 위해 위와 같이 `HTTPException`에 code를 추가해줬습니다. 위 Status Code가 똑같은 400이어도 다른 원인이 다를 수 있기 때문에 구분할 수 있는 code를 전달해 준 것입니다. 

Exception만 바꾼다고 끝이 아닙니다. FastAPI **app단에서 변경된 Exception을 잘 처리할 수 있도록 handler를 만들어 주입**시켜줘야 합니다.

다음과 같이 할 수 있습니다.

```python
from fastapi import HTTPException as BaseHTTPException, Request
from fastapi.responses import JSONResponse

async def http_exception_handler(request: Request, exc: HTTPException) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={"code": exc.code, "detail": exc.detail},
    )

# app = FastAPI() 입니다.
app.add_exception_handler(HTTPException, http_exception_handler)
```

위 핸들러를 주입시켜주면 HTTPException이 발생할 때 Response에 Code를 담아서 보냅니다. **추가로 더 넣고 싶은 데이터가 있다면 handler를 Exception과 handler를 커스텀하여 추가하면 됩니다.**

추가로 schema로 많이 쓰는 Pydantic에서는 Validation이 잘 못되면  422에러를 발생시키는데 이 에러도 커스텀할 수 있습니다. 

```python
from fastapi.exceptions import RequestValidationError

async def validation_exception_handler(request: Request, e: RequestValidationError):
    detail = e.errors()
    return JSONResponse(
        content={"detail": detail[0]["msg"], "message": "Validation Fail!!!!"},
        status_code=422,
    )

app.add_exception_handler(RequestValidationError, validation_exception_handler)
```

오늘은 FastAPI에서 사용할 수 있는 **Exception Handler**에 대해서 알아봤습니다.