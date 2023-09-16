import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  voucher: string;
  adm: boolean;
}

export interface IAuthState {
  user: IUser | null;
  logado: boolean;
}

const initialState: IAuthState = {
  user: null,
  logado: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.logado = !!action.payload;
    },
    logoutUser: state => {
      state.user = null;
      state.logado = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
