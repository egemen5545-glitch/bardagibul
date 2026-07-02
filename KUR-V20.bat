@echo off
echo Top Bulmaca V20 dosyalari www klasorune aktariliyor...
copy /Y index.html www\index.html
copy /Y style.css www\style.css
copy /Y script.js www\script.js
xcopy assets www\assets\ /E /I /Y
echo Capacitor Android sync baslatiliyor...
npx cap sync android
echo.
echo V20 kurulum tamam. Android Studio'da Run tusuna basabilirsin.
pause
