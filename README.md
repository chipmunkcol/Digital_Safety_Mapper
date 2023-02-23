## ⚛️DSM 폴더구조 규칙

1. 파일명은 View를 구성하는 파일만 대문자로 시작한다. (폴더명 등 나머지는 모두 소문자)

2. 폴더구조
   - assets
   - pages
   - components
     - pages
     - common (기존 util & router, Header, Footer, etc...)
   - styles
     - pages
     - common (Global, theme, etc...)
   - recoil
     - pages
     - common (accessToken, etc...)
   - hooks
     - api (Axios instance & React-Query)
     - function (기존 util & custom functions )
