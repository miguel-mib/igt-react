import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import participanteReducer from "./participante-reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    participante: participanteReducer,
  },
});

export * from "./selectors";
