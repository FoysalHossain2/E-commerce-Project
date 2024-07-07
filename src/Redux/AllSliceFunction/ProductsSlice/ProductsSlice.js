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

export const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers 
})