import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './featiredProductsSlice'
// import { featuredProductSlice } from './featiredProductsSlice'

export const store = configureStore({
  reducer: {
      featuredProducts: counterSlice
  },
})