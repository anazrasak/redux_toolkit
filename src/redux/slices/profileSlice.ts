import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileData1,postProfileData1,postProfileFormData } from '../actions/profileActions';

type ProfileState = {
  data: any;
  loading: boolean;
  error: string | null;
};

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData1.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProfileData1.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData1.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching data';
      })

      .addCase(postProfileData1.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(postProfileFormData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default profileSlice.reducer;
