import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ApplicationState } from '../types/stores';

const initialState: ApplicationState = {
  isLoading: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    splashLaunched(state) {
      state.isLoading = false;
    },
  },
});

export const { splashLaunched } = appSlice.actions;
