import api from './api-config';

export const getAllReviews = async () => {
  const resp = await api.get('/reviews');
  return resp.data
}

export const postReview = async (id, reviewData) => {
  const resp = await api.post(`/songs/${id}/reviews`, { review: reviewData });
  return resp.data;
}