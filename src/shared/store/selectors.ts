import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import participanteReducer from "./participante-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  participante: participanteReducer,
});

export type RootSelector = ReturnType<typeof rootReducer>;
