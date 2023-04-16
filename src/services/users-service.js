import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users";

const axiosConfig = {
    withCredentials: true
};

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API_URL, axiosConfig);
    return response.data;
};
export const findUserById = (id) => {
    return axios.get(`${USERS_API_URL}/${id}`,axiosConfig).then((response) => response.data);
};
export const createUser = (user) => {
    return axios.post(USERS_API_URL, user);
};
export const updateUser = (newUser) => {
    return axios.put(`${USERS_API_URL}/${newUser.id}`, newUser,axiosConfig);
};
export const deleteUser = (id) => {
    return axios.delete(`${USERS_API_URL}/${id}`,axiosConfig);
};
export const login = (user) => {
    return axios.post(`${USERS_API_URL}/login`, user,axiosConfig);
};
export const logout = () => {
    return axios.post(`${USERS_API_URL}/logout`,axiosConfig);
};
export const register = (user) => {
    return axios.post(`${USERS_API_URL}/register`, user,axiosConfig);
};
export const profile = () => {
    return axios.get(`${USERS_API_URL}/profile`,axiosConfig)
        .catch(error => {
            console.error("Error fetching user profile:", error);
            throw error;
        });
};