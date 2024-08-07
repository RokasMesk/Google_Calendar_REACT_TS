import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  calendarDate: Date;
}

const initialState: CalendarState = {
  calendarDate: new Date(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setCalendarDate(state, action: PayloadAction<Date>) {
      state.calendarDate = new Date(action.payload);
    },
  },
});

export const { setCalendarDate } = calendarSlice.actions;
export default calendarSlice.reducer;
