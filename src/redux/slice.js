import { createSlice } from "@reduxjs/toolkit"
const initialState={
  value:0,
  items:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
}
const addToCart=createSlice({
  name:"cart",
  initialState,
  reducers:{
    // addItemToCart:(state)=>{
    //   state.value+=1;
    // },
    addItemToCart:(state,action)=>{
      console.log(action.payload.id);
      state.items.push(action.payload);
      localStorage.setItem("cart",JSON.stringify(state.items));
    },
    // removeItemFromCart:(state)=>{
    //  state.value>0 ? state.value -= 1:null;
    removeItemFromCart:(state,action)=>{
      const cartData=state.items.filter((cartItem)=>cartItem.id!==action.payload.id);
      state.items=cartData;
      localStorage.setItem("cart",JSON.stringify(cartData));
    },
    clearCart:(state)=>{
      state.items=[];
    }
  },
})

export const {addItemToCart, removeItemFromCart,clearCart} = addToCart.actions
export default addToCart.reducer
