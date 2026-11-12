
import { mockLecturers } from "../data/mock";

// Mengambil seluruh data dosen
export async function getLecturers() {
  return mockLecturers;
}

// Mengambil dosen berdasarkan ID
export async function getLecturerById(lecturerId) {
  return (
    mockLecturers.find((lecturer) => lecturer.id === lecturerId) ?? null
  );
}

// Mengambil dosen berdasarkan program studi
export async function getLecturersByProgram(programStudiId) {
  return mockLecturers.filter(
    (lecturer) => lecturer.programStudiId === programStudiId
  );
}

// Mencari dosen berdasarkan nama
export async function searchLecturers(keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  return mockLecturers.filter((lecturer) =>
    lecturer.nama.toLowerCase().includes(normalizedKeyword)
  );
}
