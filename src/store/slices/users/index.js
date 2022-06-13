import { createSlice } from "@reduxjs/toolkit";
import setUserList from "./reducers.users";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList
  },
});

export default userSlice.reducer;