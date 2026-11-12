# SIAKAD — Pembagian Tugas Fitur

Isi nama anggota dan branch sebelum mulai. Satu anggota dapat memegang lebih dari satu modul bila tim kecil.

| Modul | Folder | PIC | Branch yang disarankan | Output awal |
|---|---|---|---|---|
| Integrasi & fondasi | `src/app/`, `src/config/`, `src/context/` | Ketua/integrator | `chore/app-foundation` | Routing, provider, konfigurasi |
| Dashboard | `src/features/dashboard/` | TBD | `feature/dashboard` | Dashboard mahasiswa |
| Profil mahasiswa | `src/features/student/` | TBD | `feature/student-profile` | Halaman profil baca-saja |
| Katalog mata kuliah | `src/features/courses/` | TBD | `feature/course-catalog` | Daftar dan detail mata kuliah |
| Direktori dosen | `src/features/lecturers/` | TBD | `feature/lecturer-directory` | Daftar dan detail dosen |
| Review dosen | `src/features/lecturer-reviews/` | TBD | `feature/lecturer-reviews` | Form dan daftar review; desain moderasi |
| KRS & jadwal | `src/features/krs/` | TBD | `feature/krs` | Pemilihan MK, ringkasan SKS, jadwal |
| Konsultasi akademik | `src/features/consultation/` | TBD | `feature/consultation` | Pengajuan dan riwayat konsultasi |
| Chatbot akademik | `src/features/chatbot/` | TBD | `feature/academic-chatbot` | UI percakapan dengan jawaban mock |

## Urutan dependensi
1. Integrator menyiapkan routing, layout bersama, dan standar komponen.
2. Semua PIC fitur boleh mengerjakan UI dengan mock data secara paralel.
3. Tim akademik/ketua menyepakati kontrak data dan aturan kurikulum.
4. Integrator menyiapkan koleksi Firestore, security rules, dan service.
5. Setiap modul menghubungkan service dan diuji secara terpisah.
6. Integrasi penuh dan UAT.

## Catatan
- `TBD` harus diganti nama PIC.
- Jangan dua orang mengerjakan file yang sama tanpa koordinasi.
- Jangan mengubah `src/App.jsx`, `src/main.jsx`, `src/context/AuthContext.jsx`, `src/config/firebase.js`, atau `package.json` dari branch fitur tanpa persetujuan integrator.
