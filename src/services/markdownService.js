import axios from '../axios';

export const getInfoMarkDownFromDoctorId = (doctorId) => {
    return axios.get(`/api/get-info-doctor/${doctorId}`);
}