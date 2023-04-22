import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        firstname: '',
        lastname: '',
        phone: '',
        cards: [], 
    },
    reducers: {
        savePhone: (state, action) => {state.phone = action.payload},
        saveFirstName: (state, action) => {state.firstname = action.payload},
        saveLastName: (state, action) => {state.lastname = action.payload},
        saveCard: (state, action) => {state.cards.push(action.payload)},
    }
})

export const {saveCard, saveFirstName, saveLastName, savePhone} = profileSlice.actions

export default profileSlice.reducer