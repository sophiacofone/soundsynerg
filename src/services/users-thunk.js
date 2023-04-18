import * as userService from "./users-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const findAllUsersThunk = createAsyncThunk("users/findAll", async () => {
    const users = await userService.findAllUsers();
    return users;
});

export const findUserByIdThunk = createAsyncThunk(
    "users/findById",
    async (id) => {
        const response = await userService.findUserById(id);
        return response.data;
    }
);

export const createUserThunk = createAsyncThunk(
    "users/create",
    async (user) => {
        const response = await userService.createUser(user);
        return response.data;
    }
);

/*export const updateUserThunk = createAsyncThunk(
    "users/update",
    async ({userId, updatedProfile}) => {
        await userService.updateUser(userId, updatedProfile);
        const updatedProfileData = await userService.findUserById(userId);
        console.log("Updated profile data thunk:", updatedProfileData.data);
        return updatedProfileData.data;
    }
);*/

export const updateProfileThunk = createAsyncThunk('profile/updateProfile', async (updatedProfile) => {
    try {
        const response = await userService.updateUser(updatedProfile);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const deleteUserThunk = createAsyncThunk("users/delete", async (id) => {
    await userService.deleteUser(id);
    return id;
});

export const loginThunk = createAsyncThunk("users/login", async (user) => {
    const response = await userService.login(user);
    return response.data;
});

export const logoutThunk = createAsyncThunk("users/logout", async () => {
    await userService.logout();
});

export const registerThunk = createAsyncThunk(
    "users/register",
    async (user) => {
        const response = await userService.register(user);
        return response.data;
    }
);

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
    try {
        const response = await userService.profile();
        return response.data;
    } catch (error) {
        throw error;
    }
});
