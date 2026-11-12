
import { mockStudents } from "../data/mock";

// Mengambil seluruh data mahasiswa
export async function getStudents() {
  return mockStudents;
}

// Mengambil mahasiswa berdasarkan UID
export async function getStudentById(uid) {
  return mockStudents.find((student) => student.uid === uid) ?? null;
}

// Mengambil mahasiswa berdasarkan NIM
export async function getStudentByNim(nim) {
  return mockStudents.find((student) => student.nim === nim) ?? null;
}
