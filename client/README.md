# 🫀 HeartCare - Sistem Prediksi Risiko Jantung AI

![Versi](https://img.shields.io/badge/Versi-1.0.0-pink.svg)
![React](https://img.shields.io/badge/Dibuat%20dengan-React-blue.svg)
![UI](https://img.shields.io/badge/Antarmuka-Modern-magenta.svg)
![Status Build](https://img.shields.io/badge/Build-Melewati-brightgreen.svg)

## 🌟 Deskripsi Proyek

**HeartCare** adalah aplikasi *frontend* modern yang dirancang untuk membantu pengguna memprediksi risiko serangan jantung mereka menggunakan teknologi Kecerdasan Buatan (AI). Proyek ini menyediakan antarmuka pengguna yang sangat intuitif, data-intensif, dan estetis, seperti yang terlihat pada cuplikan antarmuka di bawah ini. Pengguna dapat menginputkan berbagai parameter klinis, dan aplikasi akan menampilkan hasil analisis AI dalam format yang mudah dipahami, termasuk persentase probabilitas dan grafik tren.

---

### 📸 Tampilan Antarmuka

![Antarmuka Utama HeartCare](image_2.png)
*Antarmuka Utama HeartCare: Menampilkan formulir input data pasien lengkap dan panel hasil analisis AI.*

---

## ✨ Fitur Utama

-   **Formulir Input Data Komprehensif**: Antarmuka kiri menyediakan formulir yang mendetail untuk mengumpulkan semua parameter klinis wajib sesuai dengan skema data medis.
    -   *Input Dasar*: Usia, Tekanan Darah (mm Hg), Serum Kolesterol (Chol).
    -   *Input Klinis Lanjutan*: Tipe Nyeri Dada (CP), Gula Darah Puasa > 120 (FBS), Resting ECG, Detak Jantung Maksimal (Thalach), Exercise Induced Angina (Exang).
    -   *Input Model Khusus*: Oldpeak (Depresi ST), Slope Segmen ST, Jumlah Pembuluh Darah CA (CA), Thal (Thalium Test).
-   **Panel Hasil Analisis AI Real-time**: Antarmuka kanan menampilkan ringkasan hasil segera setelah prediksi dilakukan.
    -   *Kartu Status Risiko*: Kartu berwarna merah (Risiko Tinggi) atau hijau (Risiko Rendah) dengan penjelasan medis ringkas.
    -   *Gauge Chart Probabilitas*: Visualisasi instan persentase probabilitas Sakit vs. Sehat.
    -   *Ringkasan Persentase*: Bar graph kecil untuk persentase Sakit dan Sehat secara terpisah.
-   **Grafik Tren Probabilitas**: Grafik garis dinamis yang menunjukkan tren probabilitas Sakit dan Sehat, membantu pengguna memvisualisasikan perubahan risiko.
-   **Desain Modern & Gelap**: Estetika UI yang elegan dengan tema gelap dan aksen pink, memastikan kenyamanan pengguna dan fokus pada data.
-   **Validasi Data**: Memastikan pengguna menginputkan tipe data yang benar (Integer, Float, Dropdown Select) sebelum dikirim ke AI model.

## 🛠️ Teknologi yang Digunakan

-   **Backend Model AI**: Integrasi dengan model Machine Learning (ML) melalui API (misalnya, yang dibangun dengan Flask atau FastAPI).
-   **Frontend**: React.js (diasumsikan).
-   **Data Visualization**: Pustaka grafik seperti Chart.js, Recharts, atau D3.js.
-   **Desain & Styling**: CSS modern atau Tailwind CSS.
-   **Build Tool**: Webpack atau Vite.

## 🚀 Memulai (Langkah-langkah Frontend)

### Prasyarat

-   [Node.js](https://nodejs.org/) (versi >= 14 disarankan)
-   [npm](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/)

### Instalasi

1.  **Clone repositori ini**:
    ```bash
    git clone [https://github.com/royarsitobatubara/heart-attack-prediction-web.git](https://github.com/royarsitobatubara/heart-attack-prediction-web.git)
    cd client
    ```

2.  **Instal dependensi proyek**:
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Konfigurasi Environment**:
    Buat file `.env` di direktori akar dan tambahkan URL backend API Anda:
    ```env
    REACT_APP_API_URL=http://localhost:8000/api/predict
    ```

4.  **Jalankan aplikasi**:
    ```bash
    npm start
    # atau
    yarn start
    ```

5.  **Akses aplikasi** di browser Anda: `http://localhost:3000`.

## 📈 Alur Penggunaan

1.  Buka aplikasi HeartCare.
2.  Isi semua field di formulir "PREDIKSI RISIKO JANTUNG".
3.  Klik tombol "MULAI PREDIKSI AI".
4.  Data Anda akan dikirim ke backend AI model.
5.  Frontend akan menerima respons dan menampilkan hasil analisis lengkap di panel kanan secara instan.

## 🤝 Kontribusi

Kami menerima kontribusi untuk meningkatkan HeartCare! Jika Anda memiliki ide untuk fitur baru atau menemukan bug, silakan buat *issue* atau kirimkan *pull request*.

1.  Fork proyek ini.
2.  Buat cabang fitur Anda (`git checkout -b fitur/fiturBaru`).
3.  Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`).
4.  Push ke cabang tersebut (`git push origin fitur/fiturBaru`).
5.  Buat Pull Request baru.

## 📜 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detailnya.

