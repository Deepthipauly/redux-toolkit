// 1.provider- provid state to components
// 2.store - state
// 3.reducer
// 4.action
// store l data store akm, then action l namma enthan cheyendath enn vekm, aa action nadakumbo entha cheyendath enoke
// /nokit reducer data update akm, enit provider aa data react n kodukm.
// nammalk react l orikalm cout=3 n direct update aka patula, agane cheythal react n aryilla state update ayinu so rerendering nadakila,
// redux toolkit  l state mutable anu, nammuk direct cheyapatum, athn use akunath immer na library anu ithil use akanath, avar nammal kodukuna
// data de copy eduth aa copy l anu update akanath.enitan data return tara, so nammuk redux l data direct change aka patunath.
// nammade normal redux l patula, avde immer illa only in redux toolkit
// namalk ini individual ayt data katanm, so oro individual phone data store akanath cartList l anu.
//action l use akitan values fetch akanath.
// to handle count of product-cartCount
// redux identify cheyan unique name
// nammal oru method vilikmbol ath handle cheyanula action eduthit, enthh logic
//ano ath cheyth data update akum reducers. evde 2 arguments pass akm, state and action.
// action ind athl payload indavm namak individual data cartlist l store akanm, so eth product ano update akne aa data
// cartlist l update knm the array ayond namk action push cheya patum.
//namak count kude cartlist l venam so count kude add aknm.
//nammal increment l check cheyum productId indo n,
//createAsyncThunk - thunk use akunath redux n aryilla asynchronous call handle akan ,
// asynchronous aytan oru data update ava enath redux n manasilavila so ath updat akan anu thunk use akanath.
// oru variable ezhuth fetchUser the thunk equate aka athl 2 arguments varum. type arikm, ath namade name koduka then
// namde variable fetchUser, pine oru function anu aa function l an namma code ezhutha.

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

// ini react n ee method oke use akanm so namal ath export akanm, athn namma destructure akitan cheya,
//ath createSlice.action n anu cheya, oro method m oro karyagal anu cheyunath.

export const { increment, decrement, addtoCart } = cartSlice.actions;

// namalk ini reducer export akanm, reducer nammde state ne update akm using logic. logic use cheyth new state indakm
//agane update aya state store k store cheyth vekm.

export default cartSlice.reducer;

// ini store k data pass cheynm so new file indaka name it as store and import reducers in store
