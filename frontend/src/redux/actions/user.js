import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { server } from '../../server';

// Define the async thunk
export const loadUser = createAsyncThunk(
  'user/loadUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${server}/user/getuser`, {
        withCredentials: true,
      });
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
