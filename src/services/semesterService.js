
import { mockSemesters } from "../data/mock";

// Mengambil seluruh semester
export async function getSemesters() {
  return mockSemesters;
}

// Mengambil semester berdasarkan ID
export async function getSemesterById(semesterId) {
  return (
    mockSemesters.find((semester) => semester.id === semesterId) ?? null
  );
}

// Mengambil semester yang sedang aktif
export async function getActiveSemester() {
  return mockSemesters.find(
    (semester) => semester.status === "aktif"
  ) ?? null;
}
