# Top Bulmaca V20 - Dengeli Karıştırma Algoritması

Bu sürümde karıştırma algoritması daha kontrollü hale getirildi. Oyun artık aşırı hızlı/kaotik görünmeden zorlaşır.

## Değişiklikler

- Bardakların aşırı hızlı hareket etmesi azaltıldı.
- Karıştırma hızı üst sınırı yükseltildi; yani çok ileri bölümlerde bile okunabilir hız korunur.
- Zorluk artık hızdan çok bardak sayısı, renk yakınlığı, sahte hamle ve süre baskısıyla artar.
- Karıştırma sırasında topun görünmesini engelleyen ekstra güvenlik eklendi.
- VAR yavaş çekim modu dışında top karıştırma sırasında zorla gizlenir.
- Bardaklar her hareketten sonra kesin slotlarına oturtulur.
- Üst üste binme / aynı karede iki bardak kalma riskine karşı her swap sonrası snap kontrolü eklendi.
- Rastgele yukarı-aşağı sahte hareketler artık aynı anda kaos yaratmaz; kontrollü aralara alınır.

## Kurulum

1. Zip içindeki dosyaları `C:\projeler\bardagi-bul-proje` klasörüne kopyala.
2. Dosyaları değiştir uyarısına evet de.
3. `KUR-V20.bat` dosyasını çalıştır.
4. Android Studio’da Run ▶ bas.
