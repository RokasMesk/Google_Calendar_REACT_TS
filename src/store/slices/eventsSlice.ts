import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getEventsFromServer } from '../../services';
import { Event } from '../../types';

interface EventsState {
  events: Event[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  status: 'idle',
  error: null,
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const events: Event[] = await getEventsFromServer();
  return events;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
