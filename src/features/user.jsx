import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: "",
};

export const userSlice = createSlice({
  name: "auth",
  initialState: { initialStateValue },
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      state = initialStateValue;
      window.window.localStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
