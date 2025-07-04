import { createSlice } from '@reduxjs/toolkit';
import { fetchHomeData1,postHomeData1,postHomeFormData } from '../actions/homeActions';

type HomeState = {
  data: any;
  loading: boolean;
  error: string | null;
};

const initialState: HomeState = {
  data: null,
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHomeData1.pending, state => {
        state.loading = true;
      })
      .addCase(fetchHomeData1.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeData1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching data';
      })

      .addCase(postHomeData1.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(postHomeFormData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default homeSlice.reducer;
