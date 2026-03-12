import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('product' , async ()=>{
     const data = await axios.get("https://dummyjson.com/products");
      return response.products;
});

const initialState = {
    items :[],
    status : undefined,
};

const productSlice = createSlice({
    name : "product",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.items = action.payload,state.status='Successs'
        });
    },

});

export default productSlice.reducer;