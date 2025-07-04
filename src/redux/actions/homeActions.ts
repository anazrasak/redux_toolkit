import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';
import { FormDataType } from '../../types';

export const fetchHomeData1 = createAsyncThunk('home/fetchData1', async () => {
  const res = await axiosInstance.get('/books');
  return res.data;
});

export const postHomeData1 = createAsyncThunk('home/postData1', async (body: any) => {
  const res = await axiosInstance.post('/home/data2', body);
  return res.data;
});

export const postHomeFormData = createAsyncThunk(
  'home/postFormData',
  async (formData: FormDataType) => {
    const res = await axiosInstance.post('/home/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
  }
);
