import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import participanteReducer from "./candidato-reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    candidato: participanteReducer,
  },
});

export * from "./selectors";
