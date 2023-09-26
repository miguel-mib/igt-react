import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICandidatoState {
  id: number | undefined;
}

const initialState = {} as ICandidatoState;

const candidatoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCandidato(state, action: PayloadAction<ICandidatoState>) {
      state.id = action.payload.id;
    },
  },
});

export const { setCandidato } = candidatoSlice.actions;
export default candidatoSlice.reducer;
