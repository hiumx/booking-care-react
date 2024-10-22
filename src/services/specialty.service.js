import axios from "../axios";

export const createSpecialty = (data) => {
    return axios.post('/api/specialty', data);
}

export const getAllSpecialties = () => {
    return axios.get('/api/specialty');
}

export const getSpecialty = (id) => {
    return axios.get(`/api/specialty/${id}`);
}

