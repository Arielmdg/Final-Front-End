\# DATA CONTRACT — SIAKAD KRS



Versi: 1.0  

Status: Draft — menunggu validasi tim dan dokumen kurikulum resmi.



Dokumen ini menjadi standar struktur data untuk seluruh modul aplikasi SIAKAD KRS. Semua anggota wajib mengikuti kontrak ini ketika membuat mock data, service, dan komponen frontend.



\---



\## 1. Aturan Umum



1\. Gunakan `camelCase` untuk nama field.

2\. Gunakan ID yang konsisten untuk menghubungkan data antar koleksi.

3\. Field ID dan relasi disimpan sebagai string.

4\. SKS, semester, rating, dan nilai numerik disimpan sebagai number.

5\. Tanggal menggunakan format ISO 8601.

6\. Field yang belum memiliki nilai menggunakan `null`, bukan string kosong, jika memang tidak tersedia.

7\. Jangan menaruh data dummy langsung di dalam komponen React.

8\. Komponen React mengambil data melalui service.

9\. Struktur data tidak boleh diubah sepihak oleh anggota tim.



\## 2. Koleksi Mahasiswa — `students`



| Field | Tipe | Keterangan |

|---|---|---|

| uid | string | UID Firebase Authentication |

| nim | string | Nomor induk mahasiswa |

| nama | string | Nama mahasiswa |

| email | string | Email mahasiswa |

| programStudiId | string | ID program studi |

| fakultasId | string | ID fakultas |

| semesterAktif | number | Semester berjalan |

| ipk | number/null | Indeks prestasi kumulatif |

| ips | number/null | Indeks prestasi semester |

| status | string | Status mahasiswa |



Contoh:



```json

{

&#x20; "uid": "student\_001",

&#x20; "nim": "230001",

&#x20; "nama": "Mahasiswa Contoh",

&#x20; "email": "mahasiswa@example.com",

&#x20; "programStudiId": "SI",

&#x20; "fakultasId": "FT",

&#x20; "semesterAktif": 4,

&#x20; "ipk": 3.75,

&#x20; "ips": 3.8,

&#x20; "status": "aktif"

}

```



\## 3. Koleksi Dosen — `lecturers`



| Field | Tipe | Keterangan |

|---|---|---|

| id | string | ID dosen |

| nidn | string | Nomor induk dosen nasional |

| nama | string | Nama dosen |

| email | string | Email dosen |

| programStudiId | string | ID program studi |

| fotoUrl | string/null | URL foto dosen |



\## 4. Koleksi Mata Kuliah — `courses`



| Field | Tipe | Keterangan |

|---|---|---|

| id | string | ID mata kuliah |

| kode | string | Kode mata kuliah |

| nama | string | Nama mata kuliah |

| sks | number | Jumlah SKS |

| semesterRekomendasi | number | Semester rekomendasi |

| programStudiId | string | ID program studi |

| prasyarat | string\[] | Daftar ID mata kuliah prasyarat |

| dosenId | string/null | ID dosen pengampu |



\## 5. Koleksi Semester — `semesters`



| Field | Tipe | Keterangan |

|---|---|---|

| id | string | ID semester |

| nama | string | Ganjil atau Genap |

| tahunAjaran | string | Contoh: 2026/2027 |

| status | string | aktif atau tidak aktif |



\## 6. Koleksi KRS — `krs`



| Field | Tipe | Keterangan |

|---|---|---|

| id | string | ID KRS |

| studentId | string | UID mahasiswa |

| semesterId | string | ID semester |

| courseIds | string\[] | Daftar ID mata kuliah |

| totalSks | number | Total SKS yang diambil |

| status | string | Status pengajuan KRS |

| createdAt | string | Waktu pembuatan ISO 8601 |



Status awal yang diperbolehkan:

\- draft

\- submitted

\- approved

\- rejected



\## 7. Koleksi Konsultasi — `consultations`



| Field | Tipe | Keterangan |

|---|---|---|

| id | string | ID konsultasi |

| studentId | string | UID mahasiswa |

| topik | string | Topik konsultasi |

| pesan | string | Isi konsultasi |

| status | string | Status konsultasi |

| createdAt | string | Waktu pengajuan ISO 8601 |



\## 8. Koleksi Review Dosen — `lecturerReviews`



| Field | Tipe | Keterangan |

|---|---|---|

| id | string | ID review |

| studentId | string | UID mahasiswa |

| lecturerId | string | ID dosen |

| rating | number | Nilai 1 sampai 5 |

| komentar | string | Isi ulasan |

| createdAt | string | Waktu pembuatan ISO 8601 |



Review harus mengikuti aturan privasi dan moderasi yang ditentukan pengelola kampus. Identitas mahasiswa tidak boleh ditampilkan kepada publik.



\## 9. Relasi Antar Data



\- `students.programStudiId` mengacu pada program studi.

\- `courses.programStudiId` mengacu pada program studi.

\- `courses.dosenId` mengacu pada `lecturers.id`.

\- `courses.prasyarat` berisi ID dari koleksi courses.

\- `krs.studentId` mengacu pada `students.uid`.

\- `krs.semesterId` mengacu pada `semesters.id`.

\- `krs.courseIds` berisi ID dari koleksi courses.

\- `consultations.studentId` mengacu pada `students.uid`.

\- `lecturerReviews.studentId` mengacu pada `students.uid`.

\- `lecturerReviews.lecturerId` mengacu pada `lecturers.id`.



\## 10. Standar Service



Setiap modul harus memiliki service untuk mengakses data.



Contoh:



```js

export async function getCourses() {

&#x20; // Mengambil daftar mata kuliah

}

```



Komponen React tidak boleh melakukan query Firestore secara langsung.



Service bertanggung jawab untuk mengambil dan mengembalikan data dengan bentuk yang konsisten, baik sumbernya mock data maupun Firebase.



\## 11. Aturan Mock Data



\- Mock data bersama diletakkan di `src/data/mock/`.

\- Data khusus modul boleh diletakkan di folder modul masing-masing jika tidak digunakan lintas modul.

\- Semua mock data wajib mengikuti struktur dokumen ini.

\- Gunakan data fiktif, bukan data pribadi mahasiswa atau dosen sungguhan.

\- ID yang dipakai dalam relasi harus benar-benar tersedia di mock data terkait.



\## 12. Perubahan Kontrak



Jika anggota membutuhkan field atau koleksi baru:



1\. Diskusikan dengan Project Lead.

2\. Ajukan perubahan pada dokumen ini.

3\. Pastikan modul lain yang terdampak sudah diperiksa.

4\. Setelah disetujui, semua anggota mengikuti versi kontrak terbaru.



\## 13. Catatan Integrasi Firebase



Struktur ini merupakan rancangan awal, bukan konfigurasi final Firestore.



Sebelum integrasi produksi, Project Lead harus memvalidasi:

\- Struktur kurikulum resmi.

\- Aturan batas SKS dan prasyarat.

\- Relasi program studi dan fakultas.

\- Aturan persetujuan KRS.

\- Hak akses mahasiswa, dosen, dan administrator.

\- Keamanan data serta aturan Firestore Security Rules.



Jangan menganggap contoh nilai atau status dalam dokumen ini sebagai kebijakan resmi akademik kampus.



