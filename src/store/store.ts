// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

// Types for useSelector/useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
