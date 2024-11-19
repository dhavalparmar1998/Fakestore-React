import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
    value1: '',
    value2: '',
    value3: []
   
  }

const librarySlice = createSlice({
    name:"library",
    initialState,
    reducers:{
        shareLibData:(state,action)=>{
            // console.log('changelibraryName called');
            // console.log(action.payload);
            state.value = action.payload;
            // state.count = action.payload.data2;

        },
        shareGroupData:(state, action)=>{
            state.value1 = action.payload;
        },
        shareMessageData:(state, action)=>{
            state.value2 = action.payload;
        },
        shareContactData:(state, action)=>{
            state.value3 = action.payload;
        }

    }

})

export const {shareLibData,shareContactData,shareGroupData,shareMessageData} = librarySlice.actions
export default librarySlice.reducer