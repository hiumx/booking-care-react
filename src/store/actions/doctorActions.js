import actionTypes from "./actionTypes";
import { toast } from 'react-toastify';
import { getTopDoctorsService, getAllDoctorsService, createDetailDoctorService, getInfoDoctorByIdService, updateDetailDoctorService, getDoctorClinicDetail } from '../../services/doctorService'

export const fetchTopDoctorsHomeStart = () => {
    return async (dispatch) => {
        try {
            const response = await getTopDoctorsService('');
            if (response && response.errorCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: response.dataUser
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED
            })
            console.log(error);
        }
    }
}

export const getAllDoctors = () => {
    return async (dispatch) => {
        try {
            const res = await getAllDoctorsService()
            if (res && res.errorCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_DOCTORS_SUCCESS,
                    dataAllDoctors: res.doctorsData
                })
            } else {
                dispatch({
                    type: actionTypes.GET_ALL_DOCTORS_FAILED
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.GET_ALL_DOCTORS_FAILED
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch) => {
        try {
            const action = data.actionSubmit;

            const res = action === 'CREATE' ? await createDetailDoctorService(data) : await updateDetailDoctorService(data);
            if (res && res.errorCode === 0) {
                toast.success('Save information doctor success')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS
                })
            } else {
                toast.error('Save information doctor failed')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
                })
            }

        } catch (error) {
            console.log(error);
            toast.error('Save information doctor failed')
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
            })
        }
    }
}

export const getInfoDoctorById = (inputId) => {
    return async (dispatch) => {
        try {
            const res = await getInfoDoctorByIdService(inputId)
            if (res && res.errorCode === 0) {
                dispatch({
                    type: actionTypes.GET_INFO_DOCTOR_BY_ID_SUCCESS,
                    doctorData: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.GET_INFO_DOCTOR_BY_ID_FAILED
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.GET_INFO_DOCTOR_BY_ID_FAILED
            })
        }

    }
}

export const fetchDoctorClinicDetailAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await getDoctorClinicDetail(id);
            if(res && res.code === 0) {
                dispatch({
                    type: actionTypes.FETCH_DOCTOR_CLINIC_DETAIL_SUCCESS,
                    payload: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_DOCTOR_CLINIC_DETAIL_FAILED
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: actionTypes.FETCH_DOCTOR_CLINIC_DETAIL_FAILED
            })
        }
    }
}