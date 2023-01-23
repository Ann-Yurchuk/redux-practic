import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

// const mySlice = createSlice({
//   name: 'myValue',
//   initialState: 100,
//   redusers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//   },
// });
// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(10, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// });

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
