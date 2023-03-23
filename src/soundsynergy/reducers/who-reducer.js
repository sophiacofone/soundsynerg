import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../who-to-follow-list/data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});

export default whoSlice.reducer;