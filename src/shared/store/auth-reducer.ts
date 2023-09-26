import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  voucher: string;
  qvotos: number;
}

export interface IAuthState {
  user: IUser | null;
  logado: boolean;
  votou: boolean;
}

const initialState: IAuthState = {
  user: null,
  logado: false,
  votou: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
      state.logado = !!action.payload;
    },
    setVotou(state, action: PayloadAction<boolean>) {
      state.votou = action.payload;
    },
    logoutUser: state => {
      state.user = null;
      state.logado = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
