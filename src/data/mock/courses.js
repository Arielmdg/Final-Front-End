
export const mockCourses = [
  {
    id: "MK001",
    kode: "SI101",
    nama: "Pengantar Sistem Informasi",
    sks: 3,
    semesterRekomendasi: 1,
    programStudiId: "SI",
    prasyarat: [],
    dosenId: "DS001",
  },
  {
    id: "MK002",
    kode: "SI202",
    nama: "Analisis dan Perancangan Sistem",
    sks: 3,
    semesterRekomendasi: 3,
    programStudiId: "SI",
    prasyarat: ["MK001"],
    dosenId: "DS003",
  },
  {
    id: "MK003",
    kode: "TI101",
    nama: "Dasar Pemrograman",
    sks: 3,
    semesterRekomendasi: 1,
    programStudiId: "TI",
    prasyarat: [],
    dosenId: "DS002",
  },
];
