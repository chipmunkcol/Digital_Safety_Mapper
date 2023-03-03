# ⚛️DSM 기본 규칙

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
     - common (기존 util & custom functions )

</br>

3. className은 소문자와 '-'(하이픈)을 조합해 작명한다.

4. 변수 및 함수 사용시 한칸씩 여백을 준다. (prettier 사용시 해당내용 반영필수!)

```
ex)
const rule = '기본규칙입니다~';
console.log( rule )
```

5. "" or ''사용시 JSX 문법에는 "" 그 외에는 ''로 표기한다. (prettier 사용시 해당내용 반영필수!)

```
ex)
const rule = '기본규칙입니다~'; // ''사용

const RuleComponent = () => {
  return(
    <div className="main-rule">{ rule }</div> // ""사용 & 여백
  )
}
```

6. 들여쓰기는 스페이스 바 2번으로 통일한다 

</br>

# 👩‍💻 스택

- (FE) React(JS)
- (BE) Node Js(TS)
- (DB) MySQL -> PostgreSQL 마이그레이션 (완료)

- (SMT) Recoil & React-Query
- (CSS) Css모듈 -> Scss 마이그레이션

</br>

# 🎨 Scss 기본지식

[추천 블로그](https://nykim.work/97)

```
(주의)반드시 경로를 맞춰야합니다!
ex.src/scss/style.scss 파일 변환시
터미널에서 src/scss 까지 접근해서 아래 명령어를 입력해야합니다
```
- 파일 변환시 컴파일 명령어
  - sass [변환할 scss 파일명] [변환될 css 파일명]
- 폴더 변환시 *자동* 컴파일 명령어(scss -> css폴더)
  - sass --watch [input폴더]:[output폴더]
- $변수명
- @mixin(Scss 함수생성)
   - @content 구문을 쓰면 @include로 불러와 쓸 때 내용을 추가로 입력할 수 있음
- @include(함수 불러오기)
- @extend(셀렉터 불러오기 %변수명 으로 only 불러오기용으로 사용가능)
- @mixin vs @extend
  - 선택자끼리 단순히 속성만 겹치는 관계면 @mixin </br>
    의미가 비슷한 관계면 @extend(ex. btn 선언 후 color나 크기가 다른 btn 생성시) 사용권장
- @use(Scss @import) </br>

  - @import도 사용가능하나 @use 시용권장

  </br>
