import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: "John",
        lastName: "Doe",
        email: "jdoe@gmail.com",
        phone: "123-456-7890",
        address: "123 Main St",
    }
};
const userSlice = createSlice({
        name: "user",
        initialState: initialState,
        reducers: {
            updateUser: (state, action) => {
                state.user = action.payload;
            }
        },
    });
export default userSlice.reducer;
export const {updateUser} = userSlice.actions;