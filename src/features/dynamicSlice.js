import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentData: [],
  objToArr: [],
};

const dynamicSlice = createSlice({
  name: "dynamic",
  initialState,
  reducers: {
    setCurrentData: (state, action) => {
      state.currentData = action.payload.getDynamic;
    },
    changeToArr: (state, action) => {
      const x = action.payload.getField;
      state.objToArr = [];
      for (let item in x) {
        const obj = {
          id: item,
          element: x[item],
        };
        state.objToArr.unshift(obj);
      }
    },
  },
});
export const { setCurrentData, changeToArr } = dynamicSlice.actions;
export const selectDynamicData = (state) => state.dynamic.currentData;
export const selectAllFields = (state) => state.dynamic.objToArr;

export default dynamicSlice.reducer;
