import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import paymentsService from "../../service/paymentsService";

export const savePayment = createAsyncThunk(
  'savePayment',
  async (paymentData, thunkAPI) => {
    try {
      return await paymentsService.savePayment(paymentData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const paymentSlice = createSlice({
  name: "payment-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(savePayment.pending, (state, action) => {
        state.loading = 'pending';
      })
      .addCase(savePayment.fulfilled, (state, action) => {
        state.loading = 'completed';
        state.createdPayment = action.payload;
      })
      .addCase(savePayment.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = 'Something went wrong';
      });
  },
});

export const selectAllPayments = (store) => store.get;
export default paymentSlice.reducer;
