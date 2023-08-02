import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/1${id}`
  );
  console.log("Api", response.data);
  return response.data;
});

const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  userDetail: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addtoCart: (state, action) => {
      const itemExist = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        state.cartList.forEach((item) => {
          if (item?.id === action.payload.id) {
            item.count = 1;
          }
        });
        return;
      }
      state.cartList.push({
        ...action.payload,
        count: 1,
      });
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item?.id === productId) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item?.id === productId) {
          item.count--;
        }
      });
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      console.log("loading start");
    },
    [fetchUser.fulfilled]: (state, action) => {
      console.log("success");
      console.log("loading end");
      state.userDetail.push(action.payload);
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("loading end");
      console.log("error");
    },
  },
});

export const { increment, decrement, addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
