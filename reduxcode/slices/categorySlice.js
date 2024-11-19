import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'Men',
    count:12
  }

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        changeCategoryName:(state,action)=>{
            console.log('changeCategoryName called');
            console.log(action.payload);
            state.value = action.payload.data1;
            state.count = action.payload.data2;

        }
    }

})

export const {changeCategoryName} = categorySlice.actions
export default categorySlice.reducer