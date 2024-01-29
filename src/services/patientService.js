import axios from '../axios';

export const bookingSchedule = (dataBookingPatient) => {
    return axios.post(`/api/patient/booking`, {
        dataBookingPatient
    });
}