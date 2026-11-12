# SIAKAD — Team Development Guidelines

## 1. Tujuan
Dokumen ini menjadi aturan kerja bersama agar fitur dapat dikembangkan paralel dan digabungkan dengan aman.

## 2. Teknologi proyek
- React + Vite
- Tailwind CSS v4
- React Router
- Firebase Authentication
- Cloud Firestore
- Lucide React
- Git dan GitHub untuk kolaborasi

## 3. Struktur arsitektur
- `src/app/`: routing dan komposisi aplikasi.
- `src/components/`: komponen bersama lintas fitur.
- `src/features/<nama-modul>/`: seluruh kode spesifik modul.
- `src/config/` dan `src/context/`: konfigurasi dan state global, dikelola integrator.
- `src/services/`: layanan lintas fitur.
- `src/data/mock/`: data contoh untuk frontend sebelum Firestore siap.
- `docs/`: dokumentasi dan kontrak data.

Setiap fitur mengelola `pages/`, `components/`, `hooks/`, dan `services/` sesuai kebutuhan. Tidak wajib membuat file kosong yang belum digunakan.

## 4. Batas kepemilikan file
- Integrator/ketua: `src/main.jsx`, `src/App.jsx` (selama migrasi), `src/app/`, `src/config/`, `src/context/`, `package.json`, `vite.config.js`, `src/components/layout/`.
- Pemilik fitur: hanya mengubah folder `src/features/<modul>/` miliknya dan mock data yang disepakati.
- Komponen umum: perubahan di `src/components/ui/` harus melalui persetujuan integrator agar API komponen konsisten.
- Jangan commit `.env.local`, kredensial, private key, atau data mahasiswa nyata.

## 5. Aturan kerja Git
1. `main` harus selalu dalam keadaan dapat dijalankan.
2. Setiap tugas dikerjakan pada branch terpisah, contoh `feature/krs-selection`.
3. Tarik perubahan terbaru dari `main` sebelum mulai atau sebelum membuat PR.
4. Commit kecil dan deskriptif, contoh `feat(krs): add course selection table`.
5. Buat Pull Request ke `main`; jangan push langsung ke `main`.
6. Minimal satu orang melakukan review.
7. Selesaikan konflik pada branch fitur, lalu jalankan build.
8. Merge hanya setelah build berhasil dan perubahan disetujui.

Contoh perintah:
```bash
git switch main
git pull origin main
git switch -c feature/course-catalog
# kerjakan perubahan
git add .
git commit -m "feat(courses): build course catalog UI"
git push -u origin feature/course-catalog
```
Buat Pull Request melalui GitHub. Perintah `git merge` langsung ke `main` bukan alur utama tim.

## 6. Aturan frontend sebelum database siap
- Gunakan mock data dari `src/data/mock/` atau file mock milik modul.
- Pisahkan UI dari akses data: komponen memanggil fungsi service/hook, bukan query Firestore langsung di setiap komponen.
- Beri label dan komentar bahwa data masih mock.
- Jangan mengarang aturan akademik. Aturan SKS, prasyarat, kuota, kurikulum, dan jadwal harus menunggu dokumen/konfirmasi resmi.
- Setelah kontrak data disepakati, integrator menghubungkan service ke Firestore.

## 7. Kontrak minimum setiap modul
Sebelum implementasi, tuliskan di PR:
- Tujuan dan ruang lingkup fitur.
- Daftar halaman/route.
- Bentuk data input dan output.
- Komponen yang dipakai bersama.
- State loading, empty, error, dan success.
- Hak akses role yang dibutuhkan.
- Kriteria penerimaan dan cara pengujian.

## 8. Standar kode
- Nama komponen React: PascalCase.
- Nama fungsi/variabel: camelCase.
- Satu komponen utama per file bila masuk akal.
- Hindari duplikasi komponen UI.
- Jangan menaruh seluruh logika aplikasi dalam `App.jsx`.
- Jangan mengubah aturan Firestore Security Rules tanpa review.
- Jangan memasukkan API key rahasia AI ke frontend.

## 9. Pengujian sebelum Pull Request
Dari root proyek:
```cmd
npm.cmd run build
```
Pastikan tidak ada error. Uji halaman yang diubah dan pastikan login/dashboard yang sudah ada tidak rusak.

## 10. Status checkpoint
CP-01: Firebase Authentication, pembacaan profil Firestore, real-time profile listener, dan dashboard awal telah diuji oleh pemilik proyek. Struktur modul lain masih tahap scaffolding; belum dianggap terintegrasi.
