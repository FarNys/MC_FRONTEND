import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allReviews: [],
};

const reviewsSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    getAllReviews: (state, action) => {
      state.allReviews = action.payload.reviewsData;
    },
    addReview: (state, action) => {
      state.allReviews.push(action.payload.newReview);
    },
  },
});
export const { getAllReviews, addReview } = reviewsSlice.actions;
export const selectReviews = (state) => state.review.allReviews;
export default reviewsSlice.reducer;
