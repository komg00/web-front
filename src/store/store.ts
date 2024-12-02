import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../store/slices/calendarSlice";
import memberReducer from "../store/slices/memberSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    member: memberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
