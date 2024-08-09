import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../AllSliceFunction/ProductsSlice/ProductsSlice";
import AddToCartSlice from "../AllSliceFunction/AddToCartSlice/AddToCartSlice";

export const Store = configureStore({
  reducer: {
    product: ProductsSlice,
    cart: AddToCartSlice
  }
})

export default Store;