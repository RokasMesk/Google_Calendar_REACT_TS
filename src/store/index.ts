import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calendarReducer from './slices/calendarDateSlice';
import { setCalendarDate } from './slices/calendarDateSlice';
import eventsReducer from './slices/eventsSlice';
import { addEvent, fetchEvents } from './slices/eventsSlice';
import { openModal, closeModal } from './slices/modalSlice';
import modalReducer from './slices/modalSlice';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  events: eventsReducer,
  modal: modalReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

export { store, setCalendarDate, addEvent, fetchEvents, openModal, closeModal };
