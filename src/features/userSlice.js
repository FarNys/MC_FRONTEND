import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: null,
  email: null,
  isLogin: null,
  isAdmin: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.username = action.payload.username;
      state.isLogin = action.payload.isLogin;
      state.email = action.payload.email;
    },
    setLogout: (state, action) => {
      state.username = action.payload.username;
      state.isLogin = action.payload.isLogin;
      state.email = action.payload.email;
    },
  },
});
export const { setLogin } = userSlice.actions;
export const { setLogout } = userSlice.actions;
export const selectLogin = (state) => state.user.isLogin;
export const selectusername = (state) => state.user.username;
export const selectemail = (state) => state.user.email;
export default userSlice.reducer;
