import axios from "../axios"

export const getTopDoctorsService = (limit) => {
    return axios.get(`/doctor/top-doctor-home?limit=${limit}`)
}

export const getAllDoctorsService = () => {
    return axios.get('/doctor/get-all-doctor')
}

export const createDetailDoctorService = (data) => {
    return axios.post('/doctor/save-detail-doctor', data)
}

export const updateDetailDoctorService = (data) => {
    return axios.put('/doctor/save-detail-doctor', data)
}

export const getInfoDoctorByIdService = (inputId) => {
    return axios.get(`/doctor/info-doctor?id=${inputId}`)
}

export const createDoctorSchedule = (dataSchedule) => {
    return axios.post('doctor/doctor-schedule', dataSchedule);
}

export const getDoctorSchedule = ({ doctorId, date }) => {
    return axios.get(`doctor/doctor-schedule/?doctorId=${doctorId}&date=${date}`);
}

export const getTimeDetailById = (listTimeIds) => {
    return axios.get(`api/schedule-time-detail?listTimeIds=${listTimeIds}`);
}
