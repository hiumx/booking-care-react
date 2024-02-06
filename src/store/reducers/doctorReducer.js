import actionTypes from "../actions/actionTypes";

const initState = {
    topDoctors: [],
    allDoctors: [],
    dataDoctor: {},
    dataClinicByDoctor: {},
    priceExamine: 0,
    listDoctorsIdBySpecialty: []
}

const doctorReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors
            return {
                ...state
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            state.topDoctors = []
            return {
                ...state
            }
        case actionTypes.GET_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.dataAllDoctors
            return {
                ...state
            }
        case actionTypes.GET_ALL_DOCTORS_FAILED:
            state.allDoctors = []
            return {
                ...state
            }
        case actionTypes.GET_INFO_DOCTOR_BY_ID_SUCCESS:
            state.dataDoctor = action.doctorData
            return {
                ...state
            }
        case actionTypes.GET_INFO_DOCTOR_BY_ID_FAILED:
            state.dataDoctor = {}
            return {
                ...state
            }
        case actionTypes.FETCH_DOCTOR_CLINIC_DETAIL_SUCCESS:
            state.dataClinicByDoctor = action.payload;
            return {
                ...state
            }
        case actionTypes.FETCH_DOCTOR_CLINIC_DETAIL_FAILED:
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_DOCTOR_BY_SPECIALTY_ID_SUCCESS:
            return {
                ...state, listDoctorsIdBySpecialty: action.payload
            }
        case actionTypes.FETCH_ALL_DOCTOR_BY_SPECIALTY_ID_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}

export default doctorReducer