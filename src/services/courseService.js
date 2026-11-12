
import { mockCourses } from "../data/mock";

// Mengambil seluruh mata kuliah
export async function getCourses() {
  return mockCourses;
}

// Mengambil mata kuliah berdasarkan ID
export async function getCourseById(courseId) {
  return mockCourses.find((course) => course.id === courseId) ?? null;
}

// Mengambil mata kuliah berdasarkan program studi
export async function getCoursesByProgram(programStudiId) {
  return mockCourses.filter(
    (course) => course.programStudiId === programStudiId
  );
}

// Mengambil mata kuliah berdasarkan semester rekomendasi
export async function getCoursesBySemester(semester) {
  return mockCourses.filter(
    (course) => course.semesterRekomendasi === Number(semester)
  );
}
