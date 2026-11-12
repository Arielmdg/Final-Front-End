
import { mockKrs } from "../data/mock";

// Mengambil seluruh data KRS
export async function getKrsList() {
  return mockKrs;
}

// Mengambil KRS berdasarkan ID
export async function getKrsById(krsId) {
  return mockKrs.find((krs) => krs.id === krsId) ?? null;
}

// Mengambil KRS berdasarkan mahasiswa
export async function getKrsByStudent(studentId) {
  return mockKrs.filter((krs) => krs.studentId === studentId);
}

// Mengambil KRS mahasiswa pada semester tertentu
export async function getKrsByStudentAndSemester(studentId, semesterId) {
  return (
    mockKrs.find(
      (krs) =>
        krs.studentId === studentId && krs.semesterId === semesterId
    ) ?? null
  );
}

// Menghitung total SKS dari daftar mata kuliah
export function calculateTotalSks(courses) {
  return courses.reduce((total, course) => total + course.sks, 0);
}
