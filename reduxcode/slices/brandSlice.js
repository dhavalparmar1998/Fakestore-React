import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'Nike',
    count:13
  }

const brandSlice = createSlice({
    name:"brand",
    initialState,
    reducers:{
        changebrandName:(state,action)=>{
            console.log('changebrandName called');
            console.log(action.payload);
            state.value = action.payload.data1;
            state.count = action.payload.data2;

        }
    }

})

export const {changebrandName} = brandSlice.actions
export default brandSlice.reducer