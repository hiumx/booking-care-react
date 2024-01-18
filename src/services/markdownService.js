import axios from '../axios';

export const getInfoMarkDownFromDoctorId = (doctorId) => {
    return axios.get(`/api/info-doctor-markdown/${doctorId}`);
}