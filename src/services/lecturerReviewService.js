
import { mockLecturerReviews } from "../data/mock";

export async function getLecturerReviews() {
  return mockLecturerReviews;
}

export async function getLecturerReviewById(reviewId) {
  return (
    mockLecturerReviews.find((review) => review.id === reviewId) ?? null
  );
}

export async function getReviewsByLecturer(lecturerId) {
  return mockLecturerReviews.filter(
    (review) => review.lecturerId === lecturerId
  );
}

export async function getReviewsByStudent(studentId) {
  return mockLecturerReviews.filter(
    (review) => review.studentId === studentId
  );
}

export async function getAverageLecturerRating(lecturerId) {
  const reviews = await getReviewsByLecturer(lecturerId);

  if (reviews.length === 0) {
    return 0;
  }

  const totalRating = reviews.reduce(
    (total, review) => total + review.rating,
    0
  );

  return Number((totalRating / reviews.length).toFixed(1));
}
