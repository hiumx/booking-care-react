
import actionTypes from "../actions/actionTypes";

const initState = {
    allSpecialties : []
}

const specialtyReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_SPECIALTY_SUCCESS:
            return {
                ...state, allSpecialties: action.payload
            }
        default:
            return state;
    }
}

export default specialtyReducer;