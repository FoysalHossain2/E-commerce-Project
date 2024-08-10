import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    CartItem: localStorage.getItem("cartItem") 
    ? JSON.parse(localStorage.getItem("cartItem"))
    :
    [],
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
        localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
      } else {
        const temporary = ({...action.payload , CartQuantity: 1})
        state.CartItem.push(temporary)
      }
    },
    
    RemoveCart: (state, action) => {
      const removeCart = state.CartItem.filter((item) => item.id !== action.payload.id)
      state.CartItem = removeCart
      console.log(removeCart);
    },

    ProductIncrement: (state, action) => {
      const findIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)
      state.CartItem[findIndex].CartQuantity += 1
    },
    
    ProductDecrement: (state, action) => {
      const findIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)
      if (state.CartItem[findIndex].CartQuantity > 1) {
        state.CartItem[findIndex].CartQuantity -= 1
      }
    },

    GetTotalAmount: (state, action) => {
        console.log(state);
        state.CartItem.reduce((totalItem, CartItem) => {
          console.log(CartItem);         
        }, 
        {
          totalAmount: 0,
          totalItem: 0
        }
      )
    }
  }
})


export const {addToCart, RemoveCart, ProductIncrement, ProductDecrement, GetTotalAmount} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;