// import { configureStore } from '@reduxjs/toolkit';
// import { userReducer } from './userSlice';

// const someObject = {
//     key: value,
//   };
  

// const store = configureStore({
//     reducer={
//         user: userReducer,
//     }
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';  // Adjust the import according to your project structure

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
