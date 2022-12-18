import actionTypes from "../actions/actionTypes";

const initState = {
    genders: [],
    positions: [],
    roles: [],
    users: [],
    topDoctors: []
}

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_GENDER_START:
            return {
                ...state
            }
        case actionTypes.GET_GENDER_SUCCESS:
            const copyStateGender = { ...state }
            copyStateGender.genders = action.data;
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
            copyStatePosition.positions = action.data
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
            copyStateRole.roles = action.data
            return {
                ...copyStateRole
            }
        case actionTypes.GET_ROLE_FAILED:
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.usersData
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_USERS_FAILED:
            return {
                ...state
            }
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
        default:
            return state
    }
}

export default adminReducer;