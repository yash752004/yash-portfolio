import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../../../config';

export const fetchContacts = createAsyncThunk('contact/fetchContacts', async () => {
//   const response = await axios.get(`${BACKEND_URL}/api/portfoliocontacts`);
  const response = await axios.get(`http://localhost:1337/api/portfoliocontacts`);
  return response.data.data[0];
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export default contactSlice.reducer;
