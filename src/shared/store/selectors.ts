import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import candidatoReducer from "./candidato-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  candidato: candidatoReducer,
});

export type RootSelector = ReturnType<typeof rootReducer>;
