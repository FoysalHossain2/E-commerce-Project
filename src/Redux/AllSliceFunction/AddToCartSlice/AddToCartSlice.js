import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    CartItem: [],
    TotalCartItem: 0,
    TotalAmount: 0,
}

export const AddToCartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state , action) => {
      const findIndex = state.CartItem.findIndex((item) => {
        return item.id === action.payload.id
      })
      if (findIndex >= 0) {
        state.CartItem[findIndex].CartQuantity += 1 
      } else {
        const temporary = ({...action.payload , CartQuantity: 1})
        state.CartItem.push(temporary)
      }
    },
    
    RemoveCart: (state, action) => {
      const removeCart = state.CartItem.filter((item) => item.id !== action.payload.id)
      state.CartItem = removeCart
      console.log(removeCart);
    }
    
  }
})


export const {addToCart, RemoveCart} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;