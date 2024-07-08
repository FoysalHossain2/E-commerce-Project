import { createSlice } from "@reduxjs/toolkit"


const ApiStatus = {
    IDLE: 'IDLE',
    LADING: 'LADING',
    ERROR: 'ERROR' 
} 

const initialState = {
    data: {},
    status: ApiStatus.IDLE
}

export const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState,
    reducer: {
        SetProduct: (state, action) => {
            state.data = action.payload
        }
    }
})


export const { SetProduct } = ProductsSlice.actions
export default ProductsSlice.reducer
