import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CalendarState = {
  selectedDate: string | null;
};

const initialState: CalendarState = {
  selectedDate: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string | null>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
