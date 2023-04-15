import axios from 'axios';

const TOPSTATS_API = 'http://localhost:4000/api/topStats';

export const findTopStats = async () => {
    const response = await axios.get(TOPSTATS_API);
    const topStats = response.data;
    return topStats;
}

export const findTopStatById = async (id) => {
    const response = await axios.get(`${TOPSTATS_API}/${id}`);
    const topStat = response.data;
    return topStat;
}

export const createTopStat = async (topStat) => {
    const response = await axios.post(TOPSTATS_API, topStat);
    const newTopStat = response.data;
    return newTopStat;
}

export const deleteTopStat = async (id) => {
    const response = await axios.delete(`${TOPSTATS_API}/${id}`);
    const status = response.data;
    return status;
}

export const updateTopStat = async (id, topStat) => {
    const response = await axios.put(`${TOPSTATS_API}/${id}`, topStat);
    const status = response.data;
    return status;
}