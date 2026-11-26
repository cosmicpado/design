# cosmicpado 디자인 시스템

cosmicpado가 만드는 업무 화면(충북소방 기상정보통합플랫폼, 모닝브리핑 등)이 함께 쓰는 디자인 규칙과 부품 모음입니다.

## 보기

- `보기.bat`을 실행하면 브라우저에서 `http://localhost:8400/`이 열립니다.
- 또는 `index.html`을 브라우저로 바로 열어도 됩니다.

## 구성

| 파일 | 내용 |
|---|---|
| `tokens.css` | 색·글꼴·모서리 이름표(밝은 화면 · 어두운 화면 · 벽 화면) |
| `components.css` | 카드·단추·탭·요약 카드·측정 칸·알림 줄·상태 띠·표·팝업 모양 |
| `fonts/` | Pretendard 글꼴(SIL Open Font License) |
| `index.html` | 소개 · 원칙 · 가져다 쓰기 |
| `styles.html` | 색, 상태색, 벽 화면 색, 글자, 간격, 모서리, 초점, 움직임, 문구 |
| `components.html` | 부품마다 실제 모양과 쓰는 법 |
| `patterns.html` | 화면 역할, 현재 실황, 단계 표시, 여러 곳 요약, 자료 시각, 관서 순서, 벽 화면 |
| `site.css`, `site.js` | 이 문서 사이트의 틀(윗줄, 화면 색 고르기) |

## 다른 화면에서 쓰기

```html
<link rel="stylesheet" href="fonts/pretendard.css">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components.css">
```

`<html data-theme="dark">`이면 어두운 화면입니다.

## 값을 바꿀 때

값은 플랫폼(`../cb-weather-dashboard`의 `종합.html` · `재해.html` · `상황실.html` · `ui.css`)에서 옮겨 왔습니다. 플랫폼 색을 바꾸면 여기도 같이 고칩니다. 상태색을 바꿀 때는 흰 바탕 글자 대비 4.5:1 이상인지 확인합니다.
