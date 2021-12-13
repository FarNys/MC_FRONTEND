import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
  wishCards: [],
  current: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.cards = action.payload.cards;
      state.wishCards = state.cards.filter((el) => el.isWishList === true);
    },
    // setWishCard: (state, action) => {
    //   state.wishCards = state.cards.filter((el) => el.isWishList === true);
    // },
    changeWishState: (state, action) => {
      //Method 1
      // state.cards.forEach((el) => {
      //   if (el._id === action.payload.itemId) {
      //     el.isWishList = !el.isWishList;
      //   }
      // });
      // state.wishCards.forEach((el) => {
      //   if (el._id === action.payload.itemId) {
      //     el.isWishList = !el.isWishList;
      //   }
      // });
      //METHOD ii
      state.cards.forEach((item) => {
        if (item._id === action.payload.elementId) {
          item.isWishList = !item.isWishList;
        }
      });
    },
    changeWishPage: (state, action) => {
      state.wishCards.forEach((el) => {
        if (el._id === action.payload.elementId) {
          el.isWishList = !el.isWishList;
        }
      });
    },

    deleteItem: (state, action) => {
      state.cards = state.cards.filter(
        (element) => element._id !== action.payload.deleteId
      );
      state.wishCards = state.wishCards.filter(
        (element) => element._id !== action.payload.deleteId
      );
    },
    filterForEdit: (state, action) => {
      state.cards = state.cards.filter(
        (el) => el._id !== action.payload.editID
      );
      const x = action.payload.editedCard;
      state.cards.push(x);
    },
  },
});
export const {
  setCard,
  filterForEdit,
  deleteItem,
  setWishCard,
  changeWishState,
  changeWishPage,
} = cardSlice.actions;
export const selectCard = (state) => state.card.cards;
export const selectWishCard = (state) => state.card.wishCards;
export const selectCurrentCard = (state) => state.card.current;
export default cardSlice.reducer;
