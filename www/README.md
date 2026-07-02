# Top Bulmaca V21 — Sakinleştirici Müzik + Hata Temizliği

Bu sürümde oyun profesyonel bir cilaya kavuştu: tespit edilen tüm mantık hataları düzeltildi ve tamamen telifsiz, sakinleştirici bir fon müziği eklendi.

## Yenilikler (V21)

### 🎵 Sakinleştirici fon müziği
- Müzik dış dosya kullanmaz; Web Audio ile canlı üretilir (tamamen telifsiz, uygulama boyutunu büyütmez).
- Yumuşak akor pedleri (I–vi–IV–V döngüsü) ve seyrek, hafif pentatonik tınılardan oluşur.
- Menüde, oyunda ve duraklatma sırasında sakin sakin akmaya devam eder; ekran geçişlerinde kesilmez.
- Uygulama arka plana geçince otomatik susar, öne gelince kaldığı yerden devam eder.
- Yumuşak giriş/çıkış (fade) ile açılıp kapanır; asla aniden kesilmez.

### 🔊 Yeni ses kontrolleri
- Ana menüde ve oyun üst çubuğunda ayrı **Müzik (🎵)** ve **Ses Efekti (🔊)** düğmeleri.
- Ayarlar kalıcı olarak kaydedilir; oyun her açılışta tercihi hatırlar.

## Düzeltilen hatalar
- Ses tercihi her açılışta sıfırlanıyordu → artık kalıcı.
- Market ve görev ekranlarında altın sesi hiç çalmıyordu → düzeltildi.
- "Nefes Al" görevi, oyun ekranında olunmasa bile sayılabiliyordu → artık yalnızca gerçek duraklatmada sayılır.
- VAR incelemesinden sonra DOM'dan kopmuş eski bardaklara animasyon yapılıp ~0,65 sn boşa bekleniyordu → kaldırıldı.
- VAR mesajındaki fiyat sabit yazılıydı → artık `VAR_COST` sabitinden okunur (fiyat değişince mesaj otomatik güncellenir).
- `playAdBreak` içindeki kullanılmayan değişken temizlendi.
- `stopAllGameAudio` tüm AudioContext'i askıya alarak müziği de öldürürdü → artık yalnızca efektleri durdurur.

## Kurulum
1. Zip içindeki dosyaları `C:\projeler\bardagi-bul-proje` klasörüne kopyala.
2. Dosyaları değiştir uyarısına evet de.
3. `npx cap sync android` çalıştır (veya KUR bat dosyanı kullan).
4. Android Studio'da Run ▶ bas.
