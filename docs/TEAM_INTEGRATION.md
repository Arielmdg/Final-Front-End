
# TEAM INTEGRATION GUIDE

## 1. Aturan Umum
- Gunakan camelCase untuk nama variabel dan properti.
- Gunakan shared mock data dari src/data/mock.
- Komponen React tidak boleh mengakses mock data secara langsung.
- Gunakan service dari src/services untuk mengambil data.
- Jangan mengubah struktur data bersama tanpa koordinasi dengan Project Lead.
- Jangan mengubah file konfigurasi utama tanpa persetujuan Project Lead.

## 2. Shared Data
Data bersama tersedia di:
- students.js
- lecturers.js
- courses.js
- semesters.js
- krs.js
- consultations.js
- lecturerReviews.js

Dokumentasi struktur data:
docs/DATA_CONTRACT.md

## 3. Service Layer
Gunakan service berikut:
- studentService.js
- courseService.js
- lecturerService.js
- semesterService.js
- krsService.js
- consultationService.js
- lecturerReviewService.js

Contoh penggunaan:

import { getCourses } from "../../services/courseService";

const courses = await getCourses();

Sesuaikan jalur import dengan lokasi file komponen.

## 4. Aturan Pengembangan
- Gunakan data mock selama tahap pengembangan UI.
- Jangan menulis data contoh langsung di komponen.
- Jangan mengubah data akademik resmi tanpa validasi.
- Jangan menyimpan kredensial Firebase di GitHub.
- Jangan mengubah Firestore Security Rules tanpa koordinasi.

## 5. Alur Git
- Tarik perubahan terbaru dari main sebelum mulai bekerja.
- Kerjakan modul sesuai pembagian tugas.
- Jangan mengedit file milik modul anggota lain.
- Koordinasikan perubahan pada file bersama dengan Project Lead.
- Laporkan pekerjaan yang sudah selesai kepada Project Lead.
