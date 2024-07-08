import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../AllSliceFunction/ProductsSlice/ProductsSlice";

export const Store = configureStore({
  reducer: {
    product: ProductsSlice,
  }
})

export default Store;