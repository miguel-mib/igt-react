import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IParticipanteState {
  id: string;
  nome: string;
}

const initialState = {} as IParticipanteState;

const participanteSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setParticipante(state, action: PayloadAction<IParticipanteState>) {
      state.id = action.payload.id;
      state.nome = action.payload.nome;
    },
  },
});

export const { setParticipante } = participanteSlice.actions;
export default participanteSlice.reducer;
