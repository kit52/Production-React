import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollSchema } from '../types/SaveScrollSchema';
import { action } from '@storybook/addon-actions';

const initialState: SaveScrollSchema = {
  scroll: {},
};

export const SaveScrollSlice = createSlice({
  name: 'saveScroll',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: saveScrollActions } = SaveScrollSlice;
export const { reducer: saveScrollReducer } = SaveScrollSlice;
