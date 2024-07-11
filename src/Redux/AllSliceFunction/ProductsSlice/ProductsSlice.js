import { createSlice } from "@reduxjs/toolkit"


const ApiStatus = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    ERROR: 'ERROR' 
} 

const initialState = {
    data: {},
    status: ApiStatus.IDLE
}

export const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState,
    reducers: {
        SetProduct: (state, action) => {
            state.data = action.payload
        },
        SetStatus: (state , action) => {
            state.status = action.payload
        }
    }
})




// data fetch with async thunk function

export const FetchDataProduct = (ApiUrl) => {
    return async function (dispatch, getState) {
      try {
        dispatch(SetStatus(ApiStatus.LOADING))
        const response = await fetch(ApiUrl);
        const data = await response.json();
          dispatch(SetProduct(data));
          console.log(data);
          dispatch(SetStatus(ApiStatus.IDLE));
      } catch (error) {
        console.log(error);
        dispatch(SetStatus(ApiStatus.ERROR));
      }
    }
  }



export const { SetProduct , SetStatus} = ProductsSlice.actions
export default ProductsSlice.reducer
