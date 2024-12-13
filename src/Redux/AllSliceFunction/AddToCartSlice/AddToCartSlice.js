import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    CartItem: localStorage.getItem("CartItem") 
    ? JSON.parse(localStorage.getItem("CartItem"))
    :
    [],
    cartWishList: localStorage.getItem("cartWishList") 
    ? JSON.parse(localStorage.getItem("cartWishList"))
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
        const temporary = ({...action.payload , CartQuantity : 1})
        state.CartItem.push(temporary)
        localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
      }
    },


    addToWishList: (state , action) => {
      const findIndex = state.cartWishList.findIndex((item) => {
        return item.id === action.payload.id        
      })
      console.log(findIndex);
      if (findIndex >= 0) {
        state.cartWishList[findIndex].CartQuantity += 1 
        localStorage.setItem("cartWishList", JSON.stringify(state.cartWishList))
        
      } else {
        const temporary = ({...action.payload , CartQuantity : 1})
        state.cartWishList.push(temporary)
        localStorage.setItem("cartWishList", JSON.stringify(state.cartWishList))
      }
    },


    
    RemoveCart: (state, action) => {
      const removeCart = state.CartItem.filter((item) => item.id !== action.payload.id)
      state.CartItem = removeCart
      localStorage.setItem("CartItem", JSON.stringify(state.CartItem))
    },
    
    RemoveCartWishList: (state, action) => {
      const removeCart = state.cartWishList.filter((item) => item.id !== action.payload.id)
      state.cartWishList = removeCart
      localStorage.setItem("cartWishList", JSON.stringify(state.cartWishList))
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
        totalItem.totalAmount += Math.ceil(totalPrice)
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


export const {addToCart, addToWishList, RemoveCart, ProductIncrement, ProductDecrement, GetTotalAmount, RemoveCartWishList} = AddToCartSlice.actions;
export default AddToCartSlice.reducer;