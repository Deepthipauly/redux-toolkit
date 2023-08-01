import { configureStore } from "@reduxjs/toolkit"; //store n paranja file redux n import akm,ie configure store
import cartReducer from "./cart";

export const store = configureStore({  // export aknm, so react can use it. 
  reducer: {
// we can create mulitiple reducers and only one store 
    cart: cartReducer,            // name : reducer
  },
});

// ini ith react l kitan ath nammal provider lk inject aknm so ath cheyunath root l an cheyendath, athn, nammade App.js
// l an cheyendath.