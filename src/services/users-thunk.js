import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./users-service"

export const findUsersThunk = createAsyncThunk(
    'users/findUsers', async () =>
        await service.findUsers()
)
export const findUsersByID = createAsyncThunk(
    'users/findUsersByID', async (id) =>
        await service.findUserById(id)
)
export const findUsersByUsername = createAsyncThunk(
    'users/findUsersByUsername', async (username) =>
        await service.findUserByUsername(username)
)
export const findUsersByIDAndUpdate = createAsyncThunk(
    'users/findUsersByIDAndUpdate', async (id) =>
        await service.findUserByIDAndUpdate(id)
)
export const createUsers = createAsyncThunk(
    'users/createUsers', async (user) => {
        await service.createUser(user)
        return user
    }
)
export const deleteUsers = createAsyncThunk(
    'users/deleteUsers', async (id) => {
        await service.deleteUser(id)
        return id
    }
)
export const updateUsers = createAsyncThunk(
    'users/updateUsers', async (id, user) => {
        await service.updateUser(id, user)
        return user
    }
)
