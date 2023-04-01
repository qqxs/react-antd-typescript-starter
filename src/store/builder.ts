import {
  type ActionReducerMapBuilder,
  type AsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';

import { type WritableDraft } from 'immer/dist/internal';

import { ResponseStatus } from '@/constant';

function builder<S>(fetchSync: AsyncThunk<any, any, any>) {
  return (builder: ActionReducerMapBuilder<Response.ReduxState<S>>) => {
    builder
      .addCase(fetchSync.pending, (state: WritableDraft<Response.ReduxState<S>>) => {
        state.status = ResponseStatus.Loading;
      })
      .addCase(fetchSync.fulfilled, (state: WritableDraft<Response.ReduxState<S>>, action) => {
        state.status = ResponseStatus.Succeeded; // Succeeded
        state.result = action.payload;
      })
      .addCase(
        fetchSync.rejected,
        (
          state: WritableDraft<Response.ReduxState<S>>,
          action: PayloadAction<any, string, any, any>,
        ) => {
          state.status = ResponseStatus.Failed;
          state.error = action?.error?.message;
        },
      );
  };
}

export default builder;
