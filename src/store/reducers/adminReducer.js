import actionTypes from "../actions/actionTypes";

const initState = {
    gender: [],
    position: [],
    role: [],
}

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_GENDER_START:
            return {
                ...state
            }
        case actionTypes.GET_GENDER_SUCCESS:
            const copyStateGender = { ...state }
            copyStateGender.gender = action.data;
            return {
                ...copyStateGender
            }
        case actionTypes.GET_GENDER_FAILED:
            return {
                ...state
            }
        case actionTypes.GET_POSITION_START:
            return {
                ...state
            }
        case actionTypes.GET_POSITION_SUCCESS:
            const copyStatePosition = { ...state }
            copyStatePosition.position = action.data
            return {
                ...copyStatePosition
            }
        case actionTypes.GET_POSITION_FAILED:
            return {
                ...state
            }
        case actionTypes.GET_ROLE_START:
            return {
                ...state
            }
        case actionTypes.GET_ROLE_SUCCESS:
            const copyStateRole = { ...state }
            copyStateRole.role = action.data
            return {
                ...copyStateRole
            }
        case actionTypes.GET_ROLE_FAILED:
            return {
                ...state
            }
        default:
            return state
    }
}

export default adminReducer;