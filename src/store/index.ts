import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './slices/calendarDateSlice';
import { setCalendarDate } from './slices/calendarDateSlice';
import eventsReducer from './slices/eventsSlice';
import { addEvent, fetchEvents } from './slices/eventsSlice';
import {openModal, closeModal} from './slices/modalSlice';
import modalReducer from './slices/modalSlice';
const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    events: eventsReducer,
    modal: modalReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, setCalendarDate, addEvent, fetchEvents, openModal, closeModal };
