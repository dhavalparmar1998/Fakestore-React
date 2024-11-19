import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'Men',
    count:12
  }

const categorynameslice = createSlice({
    name:"category",
    initialState,
    reducers:{
        passCategoryName:(state,action)=>{
            console.log('passCategoryName called');
            console.log(action.payload);
            state.value = action.payload;
            // state.count = action.payload.data2;

        }
    }

})

export const {passCategoryName} = categorynameslice.actions
export default categorynameslice.reducer