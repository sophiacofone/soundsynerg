import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
);
export const logoutThunk = createAsyncThunk(
    "user/logout", async () => {
        await authService.logout();
    }
);
export const registerThunk = createAsyncThunk(
    "user/register", async (user) => {
        const newUser = await authService.register(user);
        return newUser;
    }
);
export const profileThunk = createAsyncThunk(
    "user/profile", async () => {
        const user = await authService.profile();
        return user;
    }
);
export const updateUserThunk = createAsyncThunk(
    "user/update", async (user) => {
        const updatedUser = await authService.updateUser(user);
        return updatedUser;
    }
);
