import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    user_id: null,
    name: null,
    is_admin: null
}

export const userReducer = createReducer(initialState, {
    setUser: (state, action) => {
        return {
            ...state,
            id: action.data.id,
            user_id: action.data.user_id,
            name: action.data.name,
            is_admin: action.data.is_admin
        }
    }
})