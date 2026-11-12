
import { mockConsultations } from "../data/mock";

// Mengambil seluruh konsultasi
export async function getConsultations() {
  return mockConsultations;
}

// Mengambil konsultasi berdasarkan ID
export async function getConsultationById(consultationId) {
  return (
    mockConsultations.find(
      (consultation) => consultation.id === consultationId
    ) ?? null
  );
}

// Mengambil konsultasi milik mahasiswa
export async function getConsultationsByStudent(studentId) {
  return mockConsultations.filter(
    (consultation) => consultation.studentId === studentId
  );
}

// Mengambil konsultasi berdasarkan status
export async function getConsultationsByStatus(status) {
  return mockConsultations.filter(
    (consultation) => consultation.status === status
  );
}
