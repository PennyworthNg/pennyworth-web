import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: null,
        id: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            // This reducer sets the user data
            const { id, email, token } = action.payload;
            state.id = id;
            state.email = email;
            state.token = token;
        },
        clearUser: (state) => {
            // This reducer clears the user data
            state.id = null;
            state.email = null;
            state.token = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
