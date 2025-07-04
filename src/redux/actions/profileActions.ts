import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
import { FormDataType } from '../../types';

export const fetchProfileData1 = createAsyncThunk('home/fetchData1', async () => {
  const res = await axiosInstance.get('/profile/data1');
  return res.data;
});

export const postProfileData1 = createAsyncThunk('profile/postData1', async (body: any) => {
  const res = await axiosInstance.post('/profile/data2', body);
  return res.data;
});

export const postProfileFormData = createAsyncThunk(
  'profile/postFormData',
  async (formData: FormDataType) => {
    const res = await axiosInstance.post('/profile/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
  }
);
