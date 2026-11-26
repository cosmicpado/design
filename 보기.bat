@echo off
rem 디자인 문서를 이 PC 브라우저로 연다 — http://localhost:8400/
set "HERE=%~dp0"
chcp 65001 > nul
title cosmicpado 디자인 시스템
cd /d "%HERE%"
echo.
echo  cosmicpado 디자인 시스템 - http://localhost:8400/
echo  이 창을 닫으면 꺼집니다.
echo.
start "" "http://localhost:8400/"
python -m http.server 8400 --bind 127.0.0.1
pause
