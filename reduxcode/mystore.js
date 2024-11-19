import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice';
import brandReducer from './slices/brandSlice';
import searchReducer from './slices/searchSlice';
import cartReducer from './slices/cartSlice';
import categorynameReducer from './slices/categorynameslice';
import libraryReducer from './slices/librarySlice';






 const mystore = configureStore({
  reducer: {
    category:categoryReducer,
    brand:brandReducer,
    search:searchReducer,
    cart:cartReducer,
    categoryname:categorynameReducer,
    library:libraryReducer
  }
});

export default mystore;