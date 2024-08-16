import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    CartItem: localStorage.getItem("CartItem") 
    ? JSON.parse(localStorage.getItem("CartItem"))
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
        localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
      }
    },
    
    RemoveCart: (state, action) => {
      const removeCart = state.CartItem.filter((item) => item.id !== action.payload.id)
      state.CartItem = removeCart
      localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
    },

    ProductIncrement: (state, action) => {
      const findIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)
      state.CartItem[findIndex].CartQuantity += 1
      localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
    },
    
    ProductDecrement: (state, action) => {
      const findIndex = state.CartItem.findIndex((item) => item.id === action.payload.id)
      if (state.CartItem[findIndex].CartQuantity > 1) {
        state.CartItem[findIndex].CartQuantity -= 1
      }
      localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
    },
    GetTotalAmount: (state, action) => {
      const totalCartItems = state.CartItem.reduce((totalItem, CartItem) => {
        const {CartQuantity, price} = CartItem
        const totalPrice = CartQuantity * price
        totalItem.totalAmount += Math.round(totalPrice) 
        totalItem.totalCart += CartQuantity
        return totalItem
      },
      {
        totalCart: 0,
        totalAmount: 0
      }
    )
    state.TotalCartItem = totalCartItems.totalCart
    state.TotalAmount = totalCartItems.totalAmount
    }
  }
})


export const {addToCart, RemoveCart, ProductIncrement, ProductDecrement, GetTotalAmount} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;