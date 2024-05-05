import axios from '../axios';

export const bookingSchedule = (dataBookingPatient) => {
    return axios.post(`/api/patient/booking`, {
        dataBookingPatient
    });
}

export const verifySchedule = ({ token, doctorId }) => {
    console.log(token, doctorId);
    return axios.post(`/api/patient/verify-schedule?token=${token}&doctorId=${doctorId}`);
}