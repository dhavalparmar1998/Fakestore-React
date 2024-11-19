import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
    
  }

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       addRecordInCartPageLoad:(state,action)=>{
        console.log(action.payload);
        state.value = action.payload;

       },
       addRecordInCart:(state,action)=>{
        console.log(action.payload);
        state.value.push(action.payload);
       },
       deleteRecordFromCart:(state,action)=>{
        state.value = action.payload;
       }

        }
});

export const {addRecordInCart,  deleteRecordFromCart,addRecordInCartPageLoad} = cartSlice.actions;
export default cartSlice.reducer