import axios from "../axios"

export const getTopDoctorsService = (limit) => {
    return axios.get(`/api/doctor/top-doctor-home?limit=${limit}`)
}

export const getAllDoctorsService = () => {
    return axios.get('/api/doctor/get-all-doctor')
}

export const createDetailDoctorService = (data) => {
    return axios.post('/api/doctor/save-detail-doctor', data)
}

export const updateDetailDoctorService = (data) => {
    return axios.patch('/api/doctor/save-detail-doctor', data)
}

export const getInfoDoctorByIdService = (inputId) => {
    return axios.get(`/api/doctor/info-doctor?id=${inputId}`)
}

export const createDoctorSchedule = (dataSchedule) => {
    return axios.post('/api/doctor/doctor-schedule', dataSchedule);
}

export const getDoctorSchedule = ({ doctorId, date }) => {
    return axios.get(`/api/doctor/doctor-schedule/?doctorId=${doctorId}&date=${date}`);
}

export const getListDoctorsIdBySpecialtyId = (id) => {
    return axios.get(`/api/doctor?specialtyId=${id}`);
}

export const getTimeDetailById = (listTimeIds) => {
    return axios.get(`/api/schedule-time-detail?listTimeIds=${listTimeIds}`);
}

export const getInfoDoctorClinic = (doctorId) => {
    return axios.get(`/api/doctor-clinic/${doctorId}`);
}

export const getDoctorClinicDetail = (doctorId) => {
    return axios.get(`/api/doctor-clinic-detail/${doctorId}`);
}

export const getAppointmentsByDate = (doctorId, date) => {
    return axios.get(`/api/doctor/appointment-schedule?doctorId=${doctorId}&date=${date}`);
}

export const confirmAppointment = ({ doctorId, bookingId }) => {
    return axios.post(`/api/doctor/confirm-appointment`, { doctorId, bookingId });
}

