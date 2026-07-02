@echo off
echo Top Bulmaca V19 dosyalari www klasorune aktariliyor...
copy /Y index.html www\index.html
copy /Y style.css www\style.css
copy /Y script.js www\script.js
copy /Y README.md www\README.md
xcopy assets www\assets\ /E /I /Y
npx cap sync android
pause
