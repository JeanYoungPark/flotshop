import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    name: 'list'
}

export const adminMenuReducer = createReducer(initialState, {
    setName: (state, action) => {
        return {
            ...state,
            name: action.name
        }
    }
});