import axios from 'axios';

const USERS_API = 'http://localhost:4000/api/users';

export const findUsers = async () => {
    const response = await axios.get(USERS_API);
    const users = response.data;
    console.log(users);
    return users;
}
export const findUserById = async (id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    const user = response.data;
    return user;
}
export const findUserByUsername = async (username) => {
    const response = await axios.get(`${USERS_API}/${username}`);
    const user = response.data;
    return user;
}
export const findUserByIDAndUpdate = async (id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    const user = response.data;
    return user;
}
export const createUser = async (user) => {
    const response = await axios.post(USERS_API, user);
    const newUser = response.data;
    return newUser;
}
export const deleteUser = async (id) => {
    const response = await axios.delete(`${USERS_API}/${id}`);
    const status = response.data;
    return status;
}
export const updateUser = async (id, user) => {
    const response = await axios.put(`${USERS_API}/${id}`, user);
    const status = response.data;
    return status;
}
