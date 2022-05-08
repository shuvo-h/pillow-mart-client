import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
export const fetchFeaturedProducts = createAsyncThunk(
  'products/fetchFeturedProducts',
  async () => {
    const response = await fetch("https://fast-bastion-88806.herokuapp.com/products")
                        .then(res=>res.json())
    return response
  }
)

const initialState = {
  featuredProducts: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.featuredProducts = [...action.payload.slice(0,6)]
    })
  },

})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer