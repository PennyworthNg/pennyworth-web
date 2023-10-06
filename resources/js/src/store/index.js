import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";
// ==============================|| REDUX - MAIN STORE ||============================== //


// Retrieve state from local storage when the application initializes
const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {};

const store = configureStore({
    reducer: reducer,
    preloadedState: persistedState,
});
// Save state to local storage whenever it changes
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
