
import actionTypes from "../actions/actionTypes";

const initState = {
    allSpecialties : [],
    specialty: {}
}

const specialtyReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_SPECIALTY_SUCCESS:
            return {
                ...state, allSpecialties: action.payload
            }
        case actionTypes.FETCH_ALL_SPECIALTY_FAILURE:
            return {
                ...state
            }
        case actionTypes.GET_SPECIALTY_BY_ID_SUCCESS:
            return {
                ...state, specialty: action.payload
            }
        case actionTypes.GET_SPECIALTY_BY_ID_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default specialtyReducer;