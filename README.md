# 🚗 RentWheels — Aplikasi Booking Sewa Motor & Mobil

> Sebuah landing page interaktif untuk layanan sewa kendaraan dengan alur pemesanan yang mudah dan modern.

---

## 📋 Deskripsi Proyek

**RentWheels** adalah proyek web statis yang mensimulasikan platform booking sewa kendaraan (motor & mobil). Dibangun menggunakan **HTML**, **Tailwind CSS**, dan **JavaScript**, proyek ini menampilkan antarmuka yang responsif dan alur pemesanan bertahap yang intuitif.

> 💡 Proyek ini dibuat sebagai media belajar dalam membangun UI landing page dengan multi-step form dan interaksi JavaScript.

---

## ✨ Fitur Utama

- 🏍️ **Pilih Kendaraan** — Tersedia pilihan motor (Scoopy, NMAX, Vespa Sprint) dan mobil (Avanza, Jazz, Fortuner)
- 📅 **Detail Penyewaan** — Input tanggal mulai & selesai, lokasi pengambilan & pengembalian
- 👤 **Data Diri** — Form pengisian nama, email, nomor telepon, dan KTP/SIM + upload foto dokumen
- 💳 **Metode Pembayaran** — Transfer bank dan E-Wallet (GoPay, OVO, Dana, dll.)
- 🧾 **Bukti Pemesanan** — Ringkasan pesanan otomatis setelah booking selesai
- 📱 **Responsif** — Tampilan optimal di desktop maupun mobile

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur halaman |
| Tailwind CSS (CDN) | Styling & layout responsif |
| JavaScript (Vanilla) | Logika form & interaksi |
| Font Awesome | Icon |
| Anime.js | Animasi UI |

---

## 🚀 Cara Menjalankan

Proyek ini adalah web statis, tidak memerlukan instalasi apapun.

1. **Clone atau download** repository ini
   ```
   git clone https://github.com/username/projek-booking-sewa.git
   ```

2. **Buka folder** proyek di file explorer

3. **Jalankan file** `index.html` langsung di browser
   > Klik 2x pada `index.html` atau klik kanan → *Open with* → Browser favorit kamu

---

## 📖 Alur Penggunaan Aplikasi (Step by Step)

### Langkah 1 — Pilih Kendaraan 🚘
- Buka halaman utama dan scroll ke bagian **"Mulai Pemesanan"** atau klik tombol **"Sewa Sekarang"**
- Pilih jenis kendaraan: **Motor** atau **Mobil**
- Pilih lokasi pengambilan (Jakarta / Jawa)
- Klik tombol **"Pilih"** pada kendaraan yang diinginkan
- Klik **"Selanjutnya"** untuk lanjut

### Langkah 2 — Detail Penyewaan 📅
- Cek detail kendaraan yang dipilih (nama, harga, kapasitas, transmisi)
- Isi **tanggal mulai** dan **tanggal selesai** sewa
- Tentukan **lokasi pengambilan** dan **lokasi pengembalian**
- Tambahkan layanan opsional jika dibutuhkan:
  - ✅ Asuransi (Rp 50.000/hari)
  - ✅ Helm (Rp 20.000) — khusus motor
  - ✅ Car Seat Anak (Rp 75.000) — khusus mobil
- Klik **"Selanjutnya"**

### Langkah 3 — Data Diri 👤
- Cek ringkasan pesanan (kendaraan, periode, tambahan, total harga)
- Isi form data diri:
  - Nama Lengkap
  - Email
  - Nomor Telepon
  - Nomor KTP/SIM
- Upload foto **KTP/SIM** dan foto **selfie dengan KTP/SIM**
- Klik **"Selanjutnya"**

### Langkah 4 — Pembayaran 💳
- Pilih metode pembayaran:
  - 🏦 Transfer Bank
  - 📲 E-Wallet (GoPay, OVO, Dana, dll.)
- Lihat detail rekening/nomor pembayaran
- Klik **"Konfirmasi Pembayaran"**

### ✅ Selesai — Bukti Pemesanan
- Halaman akan menampilkan **bukti pemesanan** berupa ringkasan lengkap
- Menu **"Bukti Pemesanan"** akan muncul di navbar

---

## 📁 Struktur File

```
projek-booking-sewa-main/
│
├── index.html          # Halaman utama (semua konten)
├── style.css           # Styling tambahan
├── script.js           # Logika JavaScript
│
├── gambar motor/       # Aset gambar motor
│   ├── honda scoopy.jpg
│   ├── nmax.jpg
│   └── sprint.jpg
│
├── gambar mobil/       # Aset gambar mobil
│   ├── avanza.jpg
│   ├── jazz.jpg
│   └── fortuner.jpg
│
├── payment bank/       # Gambar QR/info pembayaran bank
└── payment Ewallet/    # Gambar QR/info pembayaran e-wallet
```

---

## 🎨 Screenshot

> *Buka `index.html` di browser untuk melihat tampilan lengkapnya.*

---

## 👨‍💻 Developer

Dibuat dengan ❤️ sebagai proyek belajar web development.

```
"Belajar itu proses, bukan hasil akhir."
```

---

## 📝 Lisensi

Proyek ini bebas digunakan untuk keperluan belajar dan pengembangan pribadi.
