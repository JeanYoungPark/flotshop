import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    color: true,
    popup: '',
}

export const headerReducer = createReducer(initialState, {
    setColor: (state, action) => {
        return {
            ...state,
            color: action.color
        }
    },
    setPopup: (state, action) => {
        return {
            ...state,
            popup: action.popup
        }
    }
})