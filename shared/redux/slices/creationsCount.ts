import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ActionSheetIOS } from 'react-native';

import { CreationCountState } from '../types/stores';

const initialState: CreationCountState[] = new Array();

export const creationCountSlice = createSlice({
  name: 'creationCount',
  initialState,
  reducers: {
    creationClicked(state, action: PayloadAction<number>) {
      const index = state.findIndex(({ id }) => id === action.payload);
      if (index >= 0) ++state[index].count;
      else state.push({ id: action.payload, count: 1 });
    },
  },
});

export const { creationClicked } = creationCountSlice.actions;
